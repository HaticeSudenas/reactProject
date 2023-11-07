import {Dropdown, Image, Menu } from "semantic-ui-react";

function SignIn(props) {
    return (
        <div>
            <Menu.Item>
               <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQEV1VguE8bN9g/profile-displayphoto-shrink_800_800/0/1691235663294?e=2147483647&v=beta&t=8-gHj_XdZwC_J6TczgltXVjXnm06Ak7vYOLteb2zn_c"/>
               <Dropdown pointing="top right" text="Hatice">
                <Dropdown.Menu >
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
               </Dropdown>
            </Menu.Item>
        </div>
    )
}
export default SignIn;