import { ImCross } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { HiIdentification } from "react-icons/hi";
import NavItem from "./NavItem";
import DrawerLayout from "../DrawerLayout";

type NavProps = {
    onClose: () => void;
    isOpen: boolean;
};
const Nav: React.FC<NavProps> = ({ onClose, isOpen }) => {
    return (
        <DrawerLayout onClose={onClose} isOpen={isOpen}>
            <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0  -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden">
                <div
                    onClick={onClose}
                    className="flex text-LightGray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-EveningBlack"
                >
                    <ImCross />
                </div>
                <div className="flex flex-col gap-y-2 px-6 w-full transition">
                    <NavItem onClose={onClose} NavRoute={"/"} NavIcon={<ImHome />} NavText={"Home"} />
                    <NavItem onClose={onClose} NavRoute={"/contact"} NavIcon={<FaHandshake />} NavText={"Contact"} />
                    <NavItem onClose={onClose} NavRoute={"/projects"} NavIcon={<HiIdentification />} NavText={"Projects"} />
                </div>
            </div>
        </DrawerLayout>
    );
};

export default Nav;
