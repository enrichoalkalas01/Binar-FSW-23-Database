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

        npx sequelize-cli model:generate --name game_history --attributes user_id:integer,win:string,draw:string,lose:string,type_player:string,level:integer

    
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
*/