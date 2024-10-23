import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: theme.colors.base.gray700,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 133,
		position: 'relative',
		marginBottom: 30
	},
	form: {
		position: 'absolute',
		top: 150,
		height: 40,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 45,
		width: '75%',
		backgroundColor: theme.colors.base.gray500,
		borderRadius: 100,
		padding: 10,
		color: theme.colors.base.gray100,
		fontSize: theme.font_size.sm,
		fontFamily: theme.font_family.regular,
		borderColor: theme.colors.base.gray700,
		borderWidth: 1,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	},
	button: {
		height: 45,
		width: 45,
		borderRadius: 100,
		backgroundColor: theme.colors.base.gray500,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		borderLeftWidth: 0,
		borderWidth: 1,
		marginLeft: -2
	},
})
