<script setup>
    // Basic Value
    const myName = 'Huu Thuy';
    const myNumber = 23;
    const myAge = 22;
    const myCountry = 'Quang Nam';
    // Array
    const myArray = ['Huu Thuy', 23, 22, 'Quang Nam'];
    // Object
    const myObject = {
        name: 'Huu Thuy',
        number: 23,
        age: 22,
        country: 'Quang Nam'
    };
    // Function
    const myFunction = () => {
        return 'Hello, this is a function!';
    };
    // Boolean
    const myBoolean = true;
    // Null
    const myNull = null;
    // Undefined
    const myUndefined = undefined;
    // Symbol
    const mySymbol = Symbol('mySymbol');
    // BigInt
    const myBigInt = BigInt(1234567890123456789012345678901234567890);
    // Date
    const myDate = new Date();
    // RegExp
    const myRegExp = /[a-z]/g;
    // Map
    const myMap = new Map();
    myMap.set('name', 'Huu Thuy');
    myMap.set('number', 23);
    myMap.set('age', 22);
    myMap.set('country', 'Quang Nam');
    // Set
    const mySet = new Set();
    mySet.add('Huu Thuy');
    mySet.add(23);
    mySet.add(22);
    mySet.add('Quang Nam');
</script>

<template>
    <div>
        <h2>ss2 - dynamic value</h2>
        <ul>
            <li>My name: {{ myName }}</li>
            <li>My number: {{ myNumber }}</li>
            <li>My age: {{ myAge }}</li>
            <li>My country: {{ myCountry }}</li>
        </ul>
        <h2>Array</h2>
        <ul>
            <li v-for="(item, index) in myArray" :key="index">{{ index }}: {{ item }}</li>
        </ul>
        <h2>Object</h2>
        <ul>
            <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
        </ul>
        <h2>Function</h2>
        <ul>
            <li>{{ myFunction() }}</li>
        </ul>
        <h2>Boolean</h2>
        <ul>
            <li>{{ myBoolean }}</li>
        </ul>
        <h2>Null</h2>
        <ul>
            <li>{{ myNull }}</li>
        </ul>
        <h2>Undefined</h2>
        <ul>
            <li>{{ myUndefined }}</li>
        </ul>
        <h2>Symbol</h2>
        <ul>
            <li>{{ mySymbol.toString() }}</li>
        </ul>
        <h2>BigInt</h2>
        <ul>
            <li>{{ myBigInt.toString() }}</li>
        </ul>
        <h2>Date</h2>
        <ul>
            <li>{{ myDate.toString() }}</li>
        </ul>
        <h2>RegExp</h2>
        <ul>
            <li>{{ myRegExp.toString() }}</li>
        </ul>
        <h2>Map</h2>
        <ul>
            <li v-for="(value, key) in myMap" :key="key">{{ key }}: {{ value }}</li>
        </ul>
        <h2>Set</h2>
        <ul>
            <li v-for="(item, index) in Array.from(mySet)" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<style>
    h2 {
        color: #42b983;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 5px 0;
    }
    li:nth-child(odd) {
        background-color: #f9f9f9;
    }
</style>