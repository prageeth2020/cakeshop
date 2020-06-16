import React, {Component} from 'react';

class LocalStorage extends Component {
    static checkLoggedInUser() {
        var retrievedObject = localStorage.getItem('POCCakecom');
        if (retrievedObject != null) {
            var k = JSON.parse(retrievedObject);

            var arr = [];
            for (var i = 0; i < k.length; i++) {
                arr.push(k[i]);
            }
            //console.log("" + k.type);
            return k;
        } else {
            console.log("User not logged");
            var obj = {name : "first"}
            return obj;
        }
    }

    static isEmpty() {
        var retrievedObject = localStorage.getItem('POCCakecom');
        if (retrievedObject != null) {
            return false;
        } else {
            console.log("User not logged");
            return true;
        }
    }

    static getCount() {
        var retrievedObject = localStorage.getItem("POCCakecom");
        if (retrievedObject != null) {
            return LocalStorage.checkLoggedInUser().length;
        } else {
            console.log("User not logged");
            return 0;
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LocalStorage;