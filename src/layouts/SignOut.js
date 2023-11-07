import { Button, Menu } from "semantic-ui-react";

function SignOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} primary>Giriş Yap</Button>
                <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
            </Menu.Item>

        </div>
    )
}
export default SignOut;