class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    
    preload() {
        this.load.path = './assets/';
        //Precargado del sprite-sheet
        // this.load.spritesheet('tomato', 'tomato/tomato.png', {
        //     frameWidth: 16,
        //     frameHeight: 25
        // });
        this.load.spritesheet('tomato_spacing', 'tomato_spacing/tomato_spacing.png', {
            frameWidth: 16,
            frameHeight: 25,
            margin: 1,
            spacing: 2
        });
        //CARGA ESTÁNDAR DE UN ATLAS A PHASER 3
        // this.load.atlas('tomato', 'tomato_atlas/tomato.png',
        // 'tomato_atlas/tomato_atlas.json');
        //CARGA RÁPIDA DE UN ATLAS A PHASER 3 (RECOMENDADA)
        this.load.atlas('tomato', 'tomato_atlas/tomato.png','tomato_atlas/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato_atlas/tomato_anim.json');

    }

    create() {
        //Crear el game-object y mostrar primera y cuarta posición
        //this.tomato = this.add.sprite(100, 100, 'tomato', 0).setScale(4);
        //this.tomato = this.add.sprite(100, 100, 'tomato', 3).setScale(4);
        this.tomato_spacing = this.add.sprite(100, 210, 'tomato_spacing', 0).setScale(4);
        //CREAR ANIMACIÓN CON ATLAS (ESTÁNDAR)
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4);
        // this.anims.create({
        //     key: 'tomato_walk',
        //     frames: this.anims.generateFrameNames('tomato', {
        //     prefix: 'tomato_animation_1_',
        //     start: 0,
        //     end: 7
        //     }),
        //     repeat: -1,
        //     frameRate: 10
        // });
        this.tomato.anims.play('tomato_walk');
        //Generación de animación
        // console.log(this.anims.generateFrameNumbers('tomato_spacing', {
        //     start: 0,
        //     end: 7
        // }));
        this.anims.create({
            //Nombre de la animacion
            key: 'tomato_camina',
            //Se cargan los frames por números
            //  NOTA: generateFrameNames() se usa 
            //        usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('tomato_spacing',{
                star: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        //Otra forma de indicar los frames de forma explícita
        // frames: this.anims.generateFrameNumbers('tomato_spacing', {
        //     frames: [0, 1, 2, 3, 4, 5, 6, 7]
        // })
        //REPRODUCCIÓN DE ANIMACIÓN(MÁS RECOMENDAD)
        this.tomato_spacing.anims.play('tomato_camina');
        //OTRA FORMA DE EJECUTAR LA ANIMACIÓN
        //this.anims.play('tomato_camina', this.tomato_spacing);
    }

    update(time, delta) {
        
    }
}

export default Bootloader;