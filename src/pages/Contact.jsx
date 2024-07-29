import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import SocialNetwork from '../components/SocialNetwork'
import Buttons from "../components/Buttons";

const Contact = () => {
	return (
		<main>
			<Mouse />
			<div className="contact">
				<Navigation />
				<Logo />
				<ContactForm />
				<div className="contact-infos">
					<div className="address">
						<div className="content">
							<h4>adresse</h4>
							<p>12 rue Laplace</p>
							<p>64200 Biarritz</p>
						</div>
					</div>
					<div className="phone">
						<div className="content">
							<h4>téléphone</h4>
							<CopyToClipboard text="0642844484" className="hover">
								<p
									style={{ cursor: "pointer" }}
									className="clipboard"
									onClick={() => alert("Téléphone copié !")}
								>
									06 42 84 44 84
								</p>
							</CopyToClipboard>
						</div>
					</div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="fsagensy@gmail.com" className="hover">
								<p
									style={{ cursor: "pointer" }}
									className="clipboard"
									onClick={() => alert("email copié !")}
								>
									fsagensy@gmail.com
								</p>
							</CopyToClipboard>
            </div>
          </div>
          <SocialNetwork/>
          <div className="credits">
            <p>Jemma - 2024</p>
          </div>
				</div>
        <Buttons left={"/project-4"}/>
			</div>
		</main>
	);
};

export default Contact;
