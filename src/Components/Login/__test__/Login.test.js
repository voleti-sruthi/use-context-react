import { fireEvent,render, screen } from '@testing-library/react';
import Login from '../Login';
import { LoginContext } from '../../LoginContext/LoginContext';
const renderLoginContext = ()=>{
    <LoginContext.Provider value={{username,email,showProfile,setUsername,setEmail,setShowProfile}}>
        <Login></Login>
    </LoginContext.Provider>
}
it("Should have input field to take username",()=>{
    render(renderLoginContext());
    const usernameInputElement = screen.getByPlaceholderText("Enter Username");
    usernameInputElement.value="hello";
    expect(usernameInputElement.value).toBe("hello");
})
it("Should have input field to take email",()=>{
    render(<Login/>);
    const emailInputElement = screen.getByPlaceholderText("Enter email id");
    expect(emailInputElement).toBeVisible();
})

it("should have button to go to profile page",()=>{
    render(<Login/>);
    const profileButton = screen.getByRole("button",{name:"Profile Page"})
    expect(profileButton).toBeVisible();
})