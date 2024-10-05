import { lazy } from "react";

export const Header = lazy(() => import("./shared/Header"));
export const Navbar = lazy(() => import("./shared/Navbar"));
export const Footer = lazy(() => import("./shared/Footer"));
export const MobileNavbar = lazy(() => import("./custom/MobileNavbar"));
export const Hero = lazy(() => import("./section/LandingPage/Hero"));
export const Carousel = lazy(() => import("./section/LandingPage/Carousel"));
export const About = lazy(() => import("./section/LandingPage/About"));
export const Glance = lazy(() => import("./section/LandingPage/Glance"));
export const Products = lazy(() => import("./section/LandingPage/Products"));
export const Making = lazy(() => import("./section/LandingPage/Making"));
export const Trust = lazy(() => import("./section/LandingPage/Trust"));
export const Gallery = lazy(() => import("./section/LandingPage/Gallery"));
