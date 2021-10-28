import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

* {
  box-sizing: border-box;
  transition: all 0.1s ease;
}

body {
  background-color: ${({theme}) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Lato', sans-serif;
  transition: all 0.5s ease;
  color: ${({theme}) => theme.text};
}

.container {
  margin: 30px auto;
  width: 350px;
}

h1 {
  letter-spacing: 1px;
  margin: 0;
}

h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 40px 0 10px;
}

h4 {
  margin: 0;
  text-transform: uppercase;
}

.inc-exp-container {
  background-color: ${({theme}) => theme.incExpBox};
  box-shadow: ${({theme}) => theme.boxShadow} ;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  border-radius: 5px;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #ec1a04;
}

label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #9f9e9a;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  background-color: ${({theme}) => theme.inputBody} !important;
  border-radius: 5px;
}
input[type='text'],
input[type='number'] : focus {
  color: ${({theme}) => theme.text};
}

.btn {
  cursor: pointer;
  background-color: ${({theme}) => theme.btnColor};
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
  border-radius: 5px
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}

.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}

.list li {
  background-color: ${({theme}) => theme.incExpBox};
  box-shadow: var(--box-shadow);
  color: ${({theme}) =>theme.incExpText};
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

.list li.plus {
  border-right: 5px solid #2ecc71;
}

.list li.minus {
  border-right: 5px solid #ec1a04;
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.list li:hover .delete-btn {
  opacity: 1;
}
.icon-btn {
    float: right;
    position: relative;
    top: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
}
`

export const lightTheme = {
    body: "#fff",
    text: "#121212",
    incExpBox: "rgb(245, 245, 245)",
    incExpText: '#121212',
    btnColor: '#003cff',
    inputBody: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'
}

export const darkTheme = {
    body: "#121212",
    text: "#fff",
    incExpBox: "#212121",
    incExpText: "#fff",
    btnColor: '#3050ff',
    inputBody: '#212121',
    boxShadow: '0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24);'



}