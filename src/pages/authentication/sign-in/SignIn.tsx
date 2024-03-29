import React from "react";
import { Form, Button, Panel, IconButton, Stack, Divider } from "rsuite";
import { Link } from "react-router-dom";
import GithubIcon from "@rsuite/icons/legacy/Github";
import FacebookIcon from "@rsuite/icons/legacy/Facebook";
import GoogleIcon from "@rsuite/icons/legacy/Google";
import WechatIcon from "@rsuite/icons/legacy/Wechat";
import { useAtom } from "jotai";
import Brand from "@/components/Brand";
import { isLoggedInAtom } from "@/state/isLoggedInState";

const SignUp = () => {
	const [, setIsLoggedIn] = useAtom(isLoggedInAtom);

	const handleLogin = () => {
		// Perform login...

		// If login is successful, update isLoggedIn:
		setIsLoggedIn(true);
	};

	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			direction="column"
			style={{
				height: "100vh"
			}}
		>
			<Brand style={{ marginBottom: 10 }} />

			<Panel bordered style={{ background: "#fff", width: 400 }} header={<h3>Sign In</h3>}>
				<p style={{ marginBottom: 10 }}>
					<span className="text-muted">New Here? </span>{" "}
					<Link to="/sign-up"> Create an Account</Link>
				</p>

				<Form fluid>
					<Form.Group>
						<Form.ControlLabel>Username or email address</Form.ControlLabel>
						<Form.Control name="name" />
					</Form.Group>
					<Form.Group>
						<Form.ControlLabel>
							<span>Password</span>
							<a style={{ float: "right" }}>Forgot password?</a>
						</Form.ControlLabel>
						<Form.Control name="password" type="password" />
					</Form.Group>
					<Form.Group>
						<Stack spacing={6} divider={<Divider vertical />}>
							<Button appearance="primary" onClick={handleLogin}>Sign in</Button>
							<Stack spacing={6}>
								<IconButton icon={<WechatIcon />} appearance="subtle" />
								<IconButton icon={<GithubIcon />} appearance="subtle" />
								<IconButton icon={<FacebookIcon />} appearance="subtle" />
								<IconButton icon={<GoogleIcon />} appearance="subtle" />
							</Stack>
						</Stack>
					</Form.Group>
				</Form>
			</Panel>
		</Stack>
	);
};

export default SignUp;
