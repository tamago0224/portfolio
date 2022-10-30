import { GitHub, Twitter } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>tamago0224@narberal-gamma.com</title>
				<meta name="description" content="Tamago Portfolio site" />
			</Head>

			<div className={styles["portfolio-container"]}>
				<h1>tamago0224@narberal-gamma.com</h1>
				<div className={styles["portfolio-avatar-img"]}>
					<Image
						src="/images/portfolio-avatar.png"
						alt="tamago avatar"
						width={100}
						height={100}
						style={{ borderRadius: "50px" }}
					/>
				</div>
				<h2>Abount Me</h2>
				<p>都内でソフトウェアエンジニアとして働いています。</p>

				<div className={styles["portfolio-sns"]}>
					<h2>Social Medias</h2>
					<Link href="https://github.com/tamago0224">
						<GitHub fontSize="large" sx={{ mx: "10px" }} />
					</Link>
					<Link href="https://twitter.com/tamago_0224">
						<Twitter fontSize="large" sx={{ mx: "10px" }} />
					</Link>
					<h2>Blogs</h2>
					<ul>
						<li>
							<a
								href="https://tamago0224.hatenablog.com"
								target="_blank"
								rel="noreferrer"
							>
								はてなブログ
							</a>
						</li>
						<li>
							<a
								href="https://zenn.dev/tamago0224"
								target="_blank"
								rel="noreferrer"
							>
								Zenn
							</a>
						</li>
						<li>
							<a
								href="https://qiita.com/tamago_0224"
								target="_blank"
								rel="noreferrer"
							>
								Qiita (あまり更新していない)
							</a>
						</li>
					</ul>
				</div>

				<div className={styles["portfolio-skill"]}>
					<h2>Skills</h2>

					<div className={styles["portfolio-skill-card"]}>
						<h3>Programing Language</h3>
						<ul>
							<li>Java (8/11)</li>
							<li>Python 2/3</li>
							<li>JavaScript</li>
						</ul>
					</div>

					<div className={styles["portfolio-skill-card"]}>
						<h3>Framework</h3>
						<ul>
							<li>Spring Boot</li>
							<li>React</li>
						</ul>
					</div>

					<div className={styles["portfolio-skill-card"]}>
						<h3>Provisioning Tools</h3>
						<ul>
							<li>Ansible</li>
						</ul>
					</div>

					<div className={styles["portfolio-skill-card"]}>
						<h3>Tools</h3>
						<ul>
							<li>Git/Github</li>
							<li>Docker</li>
							<li>Bash</li>
							<li>Vagrant(for local env)</li>
						</ul>
					</div>

					<div className={styles["portfolio-skill-card"]}>
						<h3>Cloud</h3>
						<p>None</p>
					</div>
				</div>
			</div>
		</>
	);
}
