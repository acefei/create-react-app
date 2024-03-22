import { useAtom } from "jotai";
import { Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import locales from "./locales";
import Frame from "./components/Frame";
import Error404Page from "./pages/authentication/404";
import MembersPage from "./pages/members";
import BoardsPage from "./pages/board-list";
import BoardPage from "./pages/board";
import CreateBoardPage from "./pages/board-create";
import { isLoggedInAtom } from "./state";
import SignInPage from "./pages/authentication/sign-in";

const App = () => {
	const [isLoggedIn] = useAtom(isLoggedInAtom);

	return (
		<IntlProvider locale="en" messages={locales.en}>
			<Routes>
				{!isLoggedIn
					? <Route path="/" element={<SignInPage />} />

					: <Route path="/" element={<Frame />}>
						<Route index element={<BoardsPage />} />
						<Route path="boards/new" element={<CreateBoardPage />} />
						<Route path="boards/:id" element={<BoardPage />} />
						<Route path="boards" element={<BoardsPage />} />
						<Route path="members" element={<MembersPage />} />
					</Route>}
				<Route path="*" element={<Error404Page />} />
			</Routes>
		</IntlProvider>
	);
};

export default App;
