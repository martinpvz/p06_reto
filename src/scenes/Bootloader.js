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
        this.load.atlas('alhe', 'alhe_idle/alhe.png','alhe_idle/alhe_atlas.json');
        this.load.animation('alheAnim', 'alhe_idle/alhe_anim.json');
        this.load.atlas('alheMov1', 'alhe_mov1/alhe_mov1.png','alhe_mov1/alhe_mov1_atlas.json');
        this.load.animation('alheAnimMov1', 'alhe_mov1/alhe_anim1.json');
        this.load.atlas('alheMov2', 'alhe_mov2/alhe_mov2.png','alhe_mov2/alhe_mov2_atlas.json');
        this.load.animation('alheAnimMov2', 'alhe_mov2/alhe_anim2.json');

    }

    create() {
        this.alhe = this.add.sprite(200, 200, 'alhe', 0).setScale(.1);
        this.alhe.anims.play('alhe_idle');
        this.alheMov1 = this.add.sprite(400, 200, 'alheMov1', 0).setScale(.1);
        this.alheMov1.anims.play('mov1_Alhe');
        this.alheMov2 = this.add.sprite(600, 200, 'alheMov2', 0).setScale(.1);
        this.alheMov2.anims.play('mov2_Alhe');
    }

    update(time, delta) {
        
    }
}

export default Bootloader;