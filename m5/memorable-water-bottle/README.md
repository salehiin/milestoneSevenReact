
# 38-1 Basic concept about react
# 38.2 React introduced, component - building blocks of a website - important conceptual
# 38.3 JSX for JS XML/JS syntex extension - a system to write html in js - very important conceptual
# Babel convert syntex to js
# JSX: putting markup into JS 

# 38.4 - props - have to do again
# 38.5 - destructuring, default value of variable, 10:50 important(read only) - have to do again
# 38.6 - props, destructuring - dynamically data pass, ternary operator
# 38.7 - conditional rendering, logical &&, logical ||
# 38.8 - data rendering, map - have to do again
# 38.9 - recap, individual CSS file - have to do again

#           <!-- BASIC JSON DATA DISPLAY -->
# 39.1 - 06:50 - 11:20 (important)
# 39.2 - js VS react event handler syntex, react onClick, comparison normal, arrow & inline function, use peremeter, use {} if multiline, write handle(handleClick, handleMouseEnter) is convention
# 39.3 - useState - state management, destructuring - have to watch again
# 39.4 - internel CSS on componenet, useState
# 39.5 - useEffect, useState, data render & show - very very important watch frequently
# 39.6 - important VSCode settings, external CSS for component, organised data render & display - very very important watch frequently, important - 10:00
# 39.7 - new project ready - recap
# 39.8 - recap, react thinking(08:30) - important
# 39.9 - react documentation
    https://react.dev/learn

# 40.1 - vite project ready, React Extension Pack- Rajbir Jawanda, manage components - project planning, data load - useState, useEffect
# 40.2 - data show, get single item data from data collections(props, map), key, external css, destructuring
# 40.3 - recap - very important to understand previous video, propTypes error handle
# 40.4 - parent CSS, useState - clear
# 40.5 - add conditional class, two condition toggle, conditional inline css, state & event handler should have in same place, useState, send function as props - should watch frequently
# 40.6 - if have to use parameter in button event handler then have to wrap by an arrow function, spread operator[...], important conceptual
# 40.7 - recap in different angle, in react push-pop etc should avoid in array/object instead make a new array using spread operator, sould read- https://react.dev/learn/updating-arrays-in-state, https://react.dev/learn/updating-objects-in-state
# 40.8 - prop drilling - watch frequently
# 40.9 - deploy - surge or netlify

# 41.1 - folder organize - ES6 modules
# 41.2 - from where we found different functions, like; 'react', 'react-router-dom' etc, export-import function from js, to import all use *
# 41.3 - fake data handle, local data show - in memory object, data load from API, data hosted in github then use - not recommended, fake data - https://github.com/public-apis/public-apis, https://beeceptor.com/, https://swagger.io/
# 41.4 - location of json data file, json data load, data show in single data file, destructure, css to parent, grid - it's ok to watch this video to clear
# 41.5 - send function/event handler to child element, item add to cart - it's ok to watch this video to clear, local-session storage, indexDB - conceptual
# 41.6 - intro to local storage - very important-have to watch frequently
# 41.7 - data set to local storage - have to watch again
# 41.8 - set product in local storage, for array of & object in, find, sent props, manage cart
# 41.9 - prop types error handle, remove product from cart 


# https://restcountries.com/#endpoints-all

# process of data load
1. useState - const [bottles, setBottles] = useState([]);
2. useEffect - useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

3. fetch, then, then
4. check data found - <h2>Bottles here: {bottles.length}</h2>





# Loving the process is key
# Whereever you focus your energy flows
# Do everyday, every week, every month
# Discipline gives you the freedom to do what you really want 
# Sacrifice leads to gains
# If you wanna change your life you need to be busy
# Pack your schedule
# the more active you are the more you achive
# -Seng Kosal(youtube)


# after complete the project, it is easy to relate how anything works. So if after complete some project anyone try to recap core concepts, it makes sense and easy to understand