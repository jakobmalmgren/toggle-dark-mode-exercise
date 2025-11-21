import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../context/ThemeContext";
import LoginForm from "../LoginForm/LoginForm";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext } from "../../context/ThemeContext";

// integrerad test..
// Riktig Provider (Test 2)

// describe("ToggleTheme", () => {
//   beforeEach(() => {
//     render(
//       <ThemeProvider>
//         <ToggleTheme />
//         <LoginForm />
//       </ThemeProvider>
//     );
//   });
//   it("should be dark when you toggle the btn", () => {
//     const toggle = screen.getByTestId("check");
//     const formEl = screen.getByTestId("form-el");
//     // fireEvent.change(toggle);
//     fireEvent.click(toggle);
//     expect(formEl).toHaveClass("form-dark");
//   });
//   // en för kolla de borde bli light när de är dark
//   it("should be light when you toggle the btn", () => {
//     const toggle = screen.getByTestId("check");
//     const formEl = screen.getByTestId("form-el");

//     fireEvent.click(toggle);
//     fireEvent.click(toggle);
//     expect(formEl).toHaveClass("form-light");
//   });
//   // en för kolla om de är light från början
//   it("should be light as default", () => {
//     const formEl = screen.getByTestId("form-el");
//     expect(formEl).toHaveClass("form-light");
//   });
// });

// unit test
// Mock Provider (Test 1)
// ser inte var de sker en klick o vilken funktion de kallar..måste kolla upp de!

describe("ToggleTheme", () => {
  it("calls toggleTheme when toggle is clicked", () => {
    const toggleThemeMock = vi.fn();
    // de här måste heta samma som de ja skicka in i ThemeContext.Prover
    //    return (
    //   <ThemeContext.Provider value={{ toggleTheme, theme }}>
    //     {children}
    //   </ThemeContext.Provider>
    // );
    // de här måste heta samma som de ja skicka in i ThemeContext.Prover som ovan..
    //hooken useTheme används ändå men de är alltid light i testet, o ist för riktig
    //func: toggleTheme körs toggleThemeMock!
    const mockContext = { theme: "light", toggleTheme: toggleThemeMock };

    render(
      <ThemeContext.Provider value={mockContext}>
        <ToggleTheme />
        <LoginForm />
      </ThemeContext.Provider>
    );

    const toggle = screen.getByTestId("check");
    fireEvent.click(toggle);

    expect(toggleThemeMock).toHaveBeenCalled(); // kollar att funktionen anropas
  });

  it("renders LoginForm with initial theme from context", () => {
    const toggleThemeMock = vi.fn();
    const mockContext = { theme: "light", toggleTheme: toggleThemeMock };

    render(
      <ThemeContext.Provider value={mockContext}>
        <LoginForm />
      </ThemeContext.Provider>
    );

    const formEl = screen.getByTestId("form-el");
    expect(formEl).toHaveClass("form-light");
  });
});

//  JÄMFÖRELSE EXAKT  testerna, test 1 o test 2:
// Testtyp	Vad testas?	Bra till
// Mock Provider (Test 1)	Komponenten i isolering, utan riktig logik	Unit tests
// Riktig Provider (Test 2)	Hela systemet, riktig state, riktig toggle	Integration tests
