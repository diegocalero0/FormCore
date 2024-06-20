import { Image, useColorScheme } from "react-native";
import { SvgUri } from "react-native-svg";

const TeamCoreLogo = () => {
    const scheme = useColorScheme();

    if (scheme === "dark") {
        return <Image
            width={200}
            height={100}
            source={{ uri: "https://teamcore-multi-test2.s3.amazonaws.com/static/img/logo4.png" }}
            resizeMode="contain"
        />
    } else {
        return <SvgUri
            width={200}
            height={100}
            uri="https://www.teamcore.net/wp-content/uploads/2020/10/logoteamcore-azul-37.svg"
        />
    }
}

export default TeamCoreLogo