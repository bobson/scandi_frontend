import { Component, ReactNode } from "react";
import Navbar from "./Navbar";
import { Category } from "../types/types";
import Modal from "./Modal";
import Cart from "./Cart";

interface LayoutProps {
  categories: Category[];
  children?: ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    const { children, categories } = this.props;

    return (
      <div className="min-h-screen flex flex-col items-center m-auto max-w-screen-sm sm:max-w-[90%] md:max-w-[90%] md:max-w-[1200px] pt-52">
        <header className="w-full sm:max-w-[90%] h-20 fixed top-0 z-50 text-white bg-white">
          <Navbar categories={categories} />
        </header>

        <main className="flex-grow w-full">
          <Modal>
            <Cart />
          </Modal>
          {children}
        </main>
      </div>
    );
  }
}
