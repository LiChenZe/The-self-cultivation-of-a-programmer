<template>
    <!-- 获取home中的死数据 -->
    <!-- <div id="users">
        <h1>hellow characters</h1>
        <ul>
            <li @click="user.show = !user.show" v-for="(user,ind) in users" :key="ind">
                <h3>{{user.name}}</h3>
                <h6 v-if="user.show">{{user.position}}</h6>
            </li>
        </ul>
        <button @click="deleteUser">删除</button>
    </div> -->
    
    <!-- 获取home中请求的线上数据 -->
    <div id="users">
        <h1>hellow characters</h1>
        <ul>
            <li v-for="(user,ind) in users" :key="ind">
                <h3>{{user.name}}</h3>
                <h6>{{user.email}}</h6>
            </li>
        </ul>
        <button @click="deleteUser">删除</button>
    </div>
    
</template>
<script>
export default {
    name: 'Users',
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            // users: [
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            //     {name: 'LinColn', position: 'lawyer', show: false},
            // ],
        }
    },
    methods: {
        deleteUser() {
            this.users.pop();
        }
    }
};
</script>

<style scoped>
#users{
    width: 100%;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    list-style: none;
    border: 1px solid #000;
    padding: 30px;
    margin: 10px;
}
li h3{
    padding: 0;
    margin: 0;
}
li h6{
    padding: 0;
    margin: 0;
}
</style>