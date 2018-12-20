import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        title: 'Home Work',
        items: [
            {id:1, title: 'First post', shortDesc: 'This is a long description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},
            {id:2, title: 'Second post', shortDesc: 'This is a long short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},
            {id:3, title: 'Third post', shortDesc: 'This is a long short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},    
        ]
    }
});
