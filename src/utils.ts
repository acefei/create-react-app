export const fetchData = async () => {
  try {
    // mock the latency of fetching data, sleep 2s
    await new Promise(resolve => setTimeout(resolve, 2000))
    const dynamicData = await import('./data-source.json')
    console.log('---> Fetch data: ' + JSON.stringify(dynamicData))
    return dynamicData
  }
  catch (error) {
    console.error('Error fetching data:', error)
  }
}
