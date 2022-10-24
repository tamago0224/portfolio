import { GitHub, Twitter } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Tamago Portfolio</title>
			</Head>

			<div className="portfolio-container">
				<h1>Tamago Portfolio</h1>
				<div className="portfolio-avatar-img">
					<Image
						src="/images/portfolio-avatar.jpg"
						alt="tamago avatar"
						width={100}
						height={100}
						style={{ borderRadius: "50px" }}
					/>
				</div>
				<h2>About me</h2>
				<p>Hi, I'm software developer.</p>

				<div className="portfolio-sns">
					<h2>Social medias</h2>
					<Link href="https://github.com/tamago0224">
						<GitHub />
					</Link>
					<Link href="https://twitter.com/tamago_0224">
						<Twitter />
					</Link>
				</div>

				<div className="portfolio-skill">
					<h2>Skills</h2>

					<div className="portfolio-skill-card">
						<h3>Programing Language</h3>
						<ul>
							<li>Java (8/11)</li>
							<li>Python 2/3</li>
							<li>JavaScript</li>
						</ul>
					</div>

					<div className="portfolio-skill-card">
						<h3>Framework</h3>
						<ul>
							<li>Spring Boot</li>
							<li>React</li>
						</ul>
					</div>

					<div className="portfolio-skill-card">
						<h3>Provisioning Tools</h3>
						<ul>
							<li>Ansible</li>
						</ul>
					</div>

					<div className="portfolio-skill-card">
						<h3>Tools</h3>
						<ul>
							<li>Git/Github</li>
							<li>Docker</li>
							<li>Bash</li>
							<li>Vagrant(for local env)</li>
						</ul>
					</div>

					<div className="portfolio-skill-card">
						<h3>Cloud</h3>
						<p>None</p>
					</div>
				</div>
			</div>
		</>
	);
}
