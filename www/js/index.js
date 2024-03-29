/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        hide_secondPage();
        hide_thirdPage();
        hide_SignUp();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        console.log('App is ready!');
        setTimeout(function() {
            show_secondPage(); }, 2000);
    }
};

app.initialize();

function hide_secondPage(){
    var secondPage = document.getElementById('page2');
    secondPage.style.visibility = "hidden";
};

function hide_thirdPage(){
    var thirdPage = document.getElementById('page3');
    thirdPage.style.visibility = "hidden";
};

function show_thirdPage(){
    let secondPage = document.getElementById('page2');
    let sign_up = document.getElementById('signUpPage');
    if(secondPage.style.visibility === "visible"){
        hide_secondPage();
    }
    else if(sign_up.style.visibility === "visible"){
        hide_SignUp();
    }
    let thirdPage = document.getElementById('page3');
    thirdPage.style.visibility = "visible";
};

//the onclick to show_thirdPage doesn't work -- WHY?!
function show_signUp(){
    hide_secondPage();
    let sign_up = document.getElementById('signUpPage');
    sign_up.style.visibility = "visible";
    let backbutton = document.getElementById('backbutton').onclick = onBackKeyDown;
    let guestSubmit = document.getElementById('sign-up-button').onclick = show_thirdPage;
};

function hide_SignUp(){
    let sign_up = document.getElementById('signUpPage');
    sign_up.style.visibility = "hidden";
};

function hide_firstPage(){
    let firstPage = document.getElementById('page1');
    firstPage.style.visibility = "hidden";
};

function show_secondPage(){
    hide_firstPage();
    let secondPage = document.getElementById('page2');
    secondPage.style.visibility = "visible";
    let guest = document.getElementById('guest-button').onclick = show_thirdPage;
    let signUp = document.getElementById('sign-up-button').onclick = show_signUp;
};

function onBackKeyDown() {
    hide_SignUp();
    show_secondPage();
}