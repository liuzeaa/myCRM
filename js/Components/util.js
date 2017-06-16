export var url = 'http://222.35.226.155:18096';

export default class util {
    static Dimensions(){
        return Dimensions = require('Dimensions'),
        this.props = {
            ScreenWidth : Dimensions.get('window').width,
            ScreenHeight:Dimensions.get('window').height
        }
    }
}
