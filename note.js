/*

    Make Project With Node JS
        - Create folder
        - masuk melalui terminal ke dalam folder tersebut
        - npm init
        - create file server.js
        - npm install nodemon express morgan ejs dotenv
        - npm install mongoose mongodb ( database )
        - seteleh di install, config package.json
        - tambahkan key “start” : “nodemon server.js” di dalam key “script”
        - npm start
        - require all dependencies / library nya
        - and config / set syntax server.js
        - create structure dari folder node js
        - menggunakan concept MVC & MCR
        - membuat routes & controller
        - create routes
        - create controller function
        - import controller function to routes
        - create models ( mongoose / mongodb )
        - create connection
        - import and use to node js / server.js
        - create schema database ( structure db )
        - create function to CRUD ( Create, Read, Update, Delete )
        - testing function, bisa menggunakan ( view / thunder / postman )

    Challange Binar Database :
        - user_game ( Not Null )
        - user_game_biodata ( Null )
        - user_game_history ( Null )
    
    New Structure Binar Database :
        - users
            - id ( auto increment ) ( !null / nggk boleh kosong ) ( primary_key ) = 7
            - username ( varchar 255 / string )
            - password
            - email

        npx sequelize-cli model:generate --name User --attributes username:string,password:string,email:string
            
        - users_profile ( profile )
            - id
            - user_id ( foreign_key ) = 7
            - first_name
            - last_name
            - fullname
            - umur
            - tgl lahir
            - gender
            - address

        npx sequelize-cli model:generate --name Profile --attributes user_id:integer,first_name:string,last_name:string,fullname:string,umur:integer,tgl_lahir:integer,gender:string,address:text

        - game_history ( history ) ( game / activity )
            - id
            - user_id ( foreign_key ) = 7
            - win
            - draw
            - lose
            - type_player ( bot / user )
            - level
            - date & time

        npx sequelize-cli model:generate --name game_history --attributes user_id:integer,win:string,draw:string,lose:string,type_player:string,level:integer

        Challange Sebelum nya 
        - Youtube Learning
        - Send Github
    
        Challange Tgl 18 July 2022
        - Form Product / User ( Register )
        - Tampilin View Dengan Menggunakan Konsep EJS Templating Form
        - Save To Database
        - 30 Menit
        - SQL Database

        structure monolith / microservice
        method monolith / microservices

        Challange Tgl 20 Jul 2022
        - Membuat Relasi POST for User & Profile ( Register )
        - Membuat Relasi GET for User & Profile ( Login )
        - Simple Verification & Filter Data ( Login & Register )
        - Must use mongodb

        - id
        - user_id
        - win
        - draw
        - lose

        User Play -> Get Point User -> {
            - user_id
            - win
            - draw
            - lose
            - type_player ( bot / user )
            - date & time ( bot / user )
        } -> Send data with api -> Process With Time Date Now -> Save To Database


        # Not Require Type Player
        username - win - lose - draw - time
        naruto   -  1  -   0  -  3   - 22 July 2022, 17:00:24 ( Waktu Pas Hasil Bot & User Ditampilkan )

        # Require Type Player
        username - win - lose - draw - time
        naruto   -  1  -   0  -  3   - 22 July 2022, 17:00:24 ( Waktu Pas Hasil Bot & User Ditampilkan )
        bot      -  0  -   1  -  3   - 22 July 2022, 17:00:24 ( Waktu Pas Hasil Bot & User Ditampilkan )

        2 File 
        - Login

        .gitignore
        - Note


        ### Chapter 7 Discussion ###
        next = adalah sebuah fungsi yang dimana memberikan option lanjutan kepada sebuah proses function
        (req, res, next) => {  }
        
        
    1. Diva
    2. Faiz
    3. Bambang
    4. Hengkie
    5. Ananda
    6. Peter ( Genap )
    7. Jothan
    8. Ramdan
    9. Idham ( Ganjil )
    10 Vito


    Project Challange
    Team 1 ( Food )
    https://trello.com/invite/b/myvtRgYL/52c9755d54b77999bc13663926a34846/fsw-ch-23-team-1
    - Ramdhan
    - Jothan
    - Bambang
    - Vito
    - Idham

    Team 2 ( Technology )
    https://trello.com/invite/b/WaGpdVMo/25e414fa4675119c5c5242a50d7f91e4/fsw-ch-23-team-2
    - Faiz 1
    - Diva 2
    - Ananda 3
    - Hengkie
    - Peter 4

    async function getData() {
        try {
            let data = await fetch('https://pse.kominfo.go.id/static/json-static/LOKAL_TERDAFTAR/0.json?page[page]=1&page[limit]=10&filter[search_term]=')
            console.log(data.json())
        } catch(err) {
            console.log(err)
        }
    }

    fetch('https://pse.kominfo.go.id/static/json-static/LOKAL_TERDAFTAR/0.json?page[page]=1&page[limit]=10&filter[search_term]=')
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))


    Tahapan Pembuatan Aplikasi :
    - Design UI / UX ( Alur Website )
        - Rumusan Apa yang ingin dibut
        - product dijual ( jaket, pakaian, electronic, tanaman )
        - bisnis model
        - target market / target user

    - Developing Architecture
        - Structure Database ( each data )
        - Structure Application
            - Front End Architecture & Structure
            - Back End Architecture & Structure
        - Server Architecture ( FE & BE )
        - Data Transfer
        - Calculation Cost


    response_data: {
        username: 'sasuke',
        email: 'sasuke@gmail.com',
        fullname: 'sasuke awe awe',
        age: 17,
        type_user: 0, // 0 berarti super admin
        token: "0ai3nf09asnflkdsn-a49nafdnx-as49nfoliksd",
        refreshToken: "0ai3nf09asnflkdsn-a49nafdnx-as49nfoliksd"
    }

    function getAnswerFunction() {
        setTimeout(() => {
            checkAnswerApiP2()
            if ( checkAnswerApiP2 === true ) return false
            else getAnswerFunction()
        }, 2500)
    }

    function matchedAnswer(p1, p2) {
        if p1 & p2 // bandingin, get hasil nya
    }

    getAnswerFunction()

    setInterval(() => {
        fungsi akan dijalankan terus salam 2,5 detik
        console.log('jalan') // ini akan dijalan secara terus menerus tanpa jeda selama 2,5 detik
    }, 2500)

    - Record data p1 ke room game
    - Recive from api room game
    - repeat for player

    class="block block-1 block-active"

    Untuk Kurikulum ini sangant disayang kan sih dikarenakan penempatan materi nya yang kurang sesuai.
    Karena sesuai dengan studi yang saya rasakan selama saya belajar dari 0 sampai sekarang dan juga apa yang dibutuhkan
    para siswa dan juga perusahaan sangatlah tidak sesuai. materinya loncat" yang dimana walaupun materi nya FSW tetapi disini
    kita tidak bisa memaksakan para pemula untuk langsung bisa menjadi Full Stack. Tetapi harus nya kita memberikan option yang
    nyata terhadap para siswa nya agar bisa menjadi Front End ataupun Back End tanpa mengurangi pemahaman terhadap kedua nya.
    Berikut urutan materi yang usulkan :
    1. HTML
        - All
    2. CSS
        - All Selector & Implementation in CSS
        - CSS Properti & Implementation
        - Layouting CSS ( Grid & Flex )
        - Positioning CSS ( Relative, Absolute & Others )
        - Psuedocode CSS
        - CSS Framework ( Ini seharus nya di akhir sih, dikarenakan seharusnya siswa paham dulu dengan css sebelum masuk ke framework )
    3. Git
        - Simple Git Use
        - Simple Git Tools ( Pakai github supaya bisa secara otomoatis jadi portofolio, klo gitlab itu nggk terlalu dilirik perusahaan )
    4. Javascript
        - Flowchart & Psuedocode flow
        - Algorithm
        - Basic Using Javascript
        - Type Data ( all type data )
        - Data Structure
        - Arithmatic 
        - Conditional ( if else & switch case )
        - Looping ( harus bener" paham disini )
        - Algorithm Implementation
        - ( Mungkin disini ada yang terlewat saya lupa )
        - DOM Implementation ( supaya murid bisa langsung tau kegunaan dari javascript nya langsung )
        - Functional Programming ( disini sebelum masuk ke OOP wajib para siswa untuk bisa menerapkan functional programming nya )
        - OOP dasar ( disarankan dasar dikarenakan untuk pelajaran seperti inherit dll itu membuat murid itu susah dalam mencoba mengerti nya )
        - ( karena yang diharuskan para learner web apps itu paham implementation create / pembuatan web nya bukan implementation materi nya )
        - Langsung Masuk ke yang hilang
            - Data Implementation ( penggunaan data supaya bisa nampil di website )
            - API implementation dengan menggunakan fetch
            - Asnychronus Methods ( ini penting untuk di awal jangan di taro dibelakang! )
            - Interactive API Implementation for building dynamic basic FRONT END
        - ( Mungkin disini ada yang terlewat saya lupa )
    5. Challange Implementation FRONT END ( Disini siswa diharuskan untuk mengerti dalam FRONT END Learning dulu baru ke BACK END )
        - Disini saya mengharapkan agar diterapkan seperti ini dulu sebelum masuk ke framework.
        dikarenakan materi framework itu akan lebih berbeda dibandingkan dengan front end biasa

    6. Node JS
        - Runtime Environment
        - Inisialisasi Project Node.js & Module Concept
        - Read dan Write File & HTTP Server using http core module
        - Express
        - Routing & View Engine & Static Public Folder
        - Middle Ware + MVC & MRC Concept
        - Rest API & Methods HTTP
        - Integration With Front END ( CRUD Implementation ) ( Dashboard )
        - Database Implementation With ORM or Tools Management ( RDBMS Mysql or MongoDB ) ( Lebih disarankan untuk MongoDB )
        - Media Handling Implementation
        - Authentication & Authorization with JsonWebToken ( Tidak ada implementasi Passport ya, supaya siswa dapat memhami alur dari basic )
        - Simple Documentation API 
        - Swagger ( Optional ) bisa digantikan sama POSTMAN Documentation
        - Testing JS
        - Deploying To Server ( heroku )

    Optional antara FE or BE learning. Scrum Learning ( Sangant diharuskan sebelum masuk ke project challange )

    7. React JS
        - React Init
        - Component Concept in js framework
        - Class Component & Functional Component Concept
        - State & Props Management
        - React Routing & Folder Structure
        - Redux Global State Management
        - Integration API with Axios & Package Managements
        - Next JS
        - Deploying To Server ( netlify or heroku )
        - ( Firebase sangat tidak disarankan dikarenakan sudah di isi dengan materi backend yang sudah di pelajari )

    8. Project Implementation

    // let i = 0
    // setInterval(() => {
    //     i += 1
    //     console.log('interval ' + i)
    // }, 100)

    // function tester() {
    //     setTimeout(() => {
    //         i += 1
    //         console.log('timeout ' + i)
    //         if ( i < 10 ) tester()
    //     }, 1000)
    // }

    // tester()

    https://api.themoviedb.org/3/movie/search/movie
*/