/* eslint-disable jsx-a11y/anchor-has-content */
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const footerLinks = [
    "Audio Description",
    " Help Center",
    "Gift Cards",
    "Media Center",
    "Investor Relations",
    "Jobs", "Term of Use",
    "Privacy",
    "Legal Notices",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
]

function Footer() {
    return (
        <div className="pb-2 pt-24 bg-[var(--primary-color)] px-10">
            <div className="max-w-[980px] mx-auto">
                <div className="flex items-center text-[#808080] mb-4">
                    <Tippy content="Facebook" placement="top" theme="light">
                        <div className="cursor-pointer mx-2 text-[24px] flex items-center justify-center w-[42px] h-[42px] rounded-full social-media">
                            <FaFacebookF />
                        </div>
                    </Tippy>
                    <Tippy content="Instagram" placement="top" theme="light">
                        <div className="cursor-pointer mx-2 text-[24px] flex items-center justify-center w-[42px] h-[42px] rounded-full social-media">
                            <FaInstagram />
                        </div>
                    </Tippy>
                    <Tippy content="Twitter" placement="top" theme="light">
                        <div className="cursor-pointer mx-2 text-[24px] flex items-center justify-center w-[42px] h-[42px] rounded-full social-media">
                            <FaTwitter />
                        </div>
                    </Tippy>
                    <Tippy content="Youtube" placement="top" theme="light">
                        <div className="cursor-pointer mx-2 text-[24px] flex items-center justify-center w-[42px] h-[42px] rounded-full social-media">
                            <FaYoutube />
                        </div>
                    </Tippy>
                </div>
                <div>
                    <ul className="flex items-start flex-row flex-wrap px-3.5">
                        {
                            footerLinks.map((item, index) => (
                                <li
                                    className="text-[13px] text-[#808080] list-none flex-[25%] mb-4 hover:text-[var(--white-color)] hover:font-medium transition"
                                    key={index}>
                                    <a href="" alt="">
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="text-[13px] text-[#808080] mt-2">Copyright © 2022 Netflix by Phan Quoc Dat</div>
            </div>
        </div>
    );
}

export default Footer;