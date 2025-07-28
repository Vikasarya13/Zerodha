import React from "react";
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Hero from "../landing_page/home/Hero";

// Test suite 

describe('Hero Component', () => {
    Text ("renders hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getAllByAltText("Hero Image");
        expoct(heroImage).toBeInTheDocument();
        expoct(heroImage).toHaveAttribute("src", "media/image/homepage.png")
    });

    Text ("renders signup button", () => {
        render(<Hero/>);
        const signupButton = screen.getByRole("button", {name: "/signup"});
        expoct(signupButton).toBeInTheDocument();
        expoct(signupButton).toHaveClass("btn-primary");
    });
    
} )