import { Octokit } from 'octokit';

const getConfig = async (token: string, owner: string, repo: string) => {
	const octokit = new Octokit({
		auth: token
	});

	const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
		owner: owner,
		repo: repo,
		path: '.gcms/config.json'
	});

	const { content } = response.data;

	const buffer = Buffer.from(content, 'base64');
	const text = buffer.toString('ascii');
	return JSON.parse(text);
};

export default getConfig;
