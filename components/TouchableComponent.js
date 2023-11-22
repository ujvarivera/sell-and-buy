import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TouchableComponent({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.textColor}>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textColor: {
      color: 'violet',
    },
});