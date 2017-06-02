function Bug (){
    var img = 'data:image/png;base64,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';
    var img_sec = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABM1SURBVHja1Jp5sB/Vdec/93b3b3/7rqcnCfEkWYuRxGKQQWMpCCEEYyxkUiL22GMJE+JxTJw45RSmghhiEpJM4poZewoH49jYMRCBMMsggwEJLUZICCEJIaT3np7evv72pdd754/+AXKCHMFkJpVbdau7f7/u2+d7z/mec+49LbTW/Htukn/nTfx/GF8ANDc3RwzDiACuVlpKQ6K1FlppVxrSU0rhui7ZbPZfB8DNN99sRKPRpVLKNgCt9YmHH3749G8aq6ut60I/FlkllHpTCCNlmsRNKWcV84VXDQNd31zf1tTekJ7R1T71q5cPDXbN6lANjfVyeHjYGBue8u1SRUWiESKRCOvWrcNxHAHISCSiH3zwQfVBLzXPZVpCiN2zZ89e0dTUhNaa/v5+dcstt+zQWt/+yCOPDJ4t+O23377wqaefuVMma083JFMPJWtT2YVz516ViJqTcy+8oO6Z53++qbWzTXquE3NsW9kVZ6ixqf6wZUV23/39P3Hq4rWB1JJf/PyXPPJ3T8aOHzu+5OjRo29s2LAhIoS4vL+/P+jq6pocHBw8cb4amAmcuemmm+TExARCCFavXk13dzfbt28/Ztv2pc8995wDWPfee+9X4/H4H9bW1Ny6c8++UwNj019asXyJcJ1yzZsnj/1Oa0dLwopZhgoCpGWYcTNGV0dnkM3nyUxM7p3ZOeu22q7k6WtuuDp46aldRmGydPFFiy/65B/8/tdfyueLjTNmdPT7fjDj5Ml3rgW2fhgOfA24AcgBrcCKe+65x8rn8/T19X1++/bt2//ivr/867ndczavXLnyB5VKZU8um733T7dunVlTmyI5qx4zGom6lQrKC/A8l2RNHVLCrJZOls9fRktLC2eGTg/2Dp9au2PbC++cGTojk4nkf5iazl0VaP1N0zSFlMY+u1L639lM5oeuXflnBDF+A4D9wMPAPwI7gAuz2eyiDRs2cPDgQefyFSsuX/CxBV/94he+YAZBcNGePXuuu++++zpy+ay5fM0K04iYptAaIUwQGpQmkUigEPiBT0dTO47jsnDBwrpXdu25pmPmrANvHDo8XSyV/6cVi/92fUPDj9HyB1rzMwl7LUMkSqVS7nw58E9bABw+fvz4xoaGBhzHueFnP/1pMhGLid/ZtZOenp5oc2tbNNHQzJprVzI2nkYmJYII0q8gzQjSCEhPTXPBrNmk83ke+Pu/w8nbWJEopmnOq22o/UwQqDPLli39+Km+M7kVKz/+o9u+9nln/y8ef+vpHafMQ/sOt7W1tcnx8XH1UQAYwLDrum6lUol0dnbWbNu2jXR6mpbmZiqe5sWdu+mc18roSBqjJkAHUCo6TPRNUNuSInBdAk+x8/mXaaxrJh6tZcWG32JiYhrlloWp1BUNjTUPDQ4MRRPJlIim6mQ0UWOu+/zt8gtfaXWWzr180LE9PowJnd1SQANwyYIFC1pq6hsRVgxHSQ4e72PX3n3Mnz+PgfFRMpk0k2Npeo/0kxnLE6+NYVpQKbnksmU6Zjdh2xXSU1P0n+oh2ZRicjItpjKZ2Z/5j+uvef3g4fpIPGHW1tV9/4rVy7QRMac95QaLLl3Cz3/yFM0tLVY+n1cfVgM2MAm8+sADDyycu2gp/p7XSNTUIo0opekxdhbzIdKGBIVsETNiYEQE5VIR15Pkp8oYliSXVji+xojXYEYNRk6fwYzGKRdsMTw8Mj+TnTourNghx7UHbNeeHY1GIjaOe/WqlcyY08nU2JT/UVIJByjX1taX4zV1OLaNaUgMIankp7EScZK1ERy7TLlQQAiFW3EpZYukRycoZDKYMU3g26SnC4wNTuFrD9MysMuCwHWRpmLv3j1GLJa6UAfq2mKu1FQpFoUQMrCwRMGzue2OL+LYjq6vr/9IuVDEssQKrQ0CP0ApH6UVhpCoIMDzA6yIgRZgJUyUrCBNjZVIIJAYEYHn+mglqKuVVPIVslM5KoUs2cksdr7A9EQZMOOnjr/RPjWZ9bO5UtH13SAgMIQI+OJ//jzRWIxIJPKhAAig9tNrmtb97a2ty25YFWE6XaRStvE9F9f3sWISt+KjMQkccAoBUsdCF6oErgt2UaJVFDBx3AiWFUWoACEcXNtGKc3aNW1s/HQtAIf2vnxmYnQs47uOGjozEHnpyZ1UsGlua0JK+aEARLq7W5ctX5j6o+uXrZXf3fhfGfiD/8Ty7jLjw4OM9B4lloxiRiSGoTEtA+W6ZKensMslzIhJXXMM7bsYFpgRQWN7Le1dSdq7apk5t4OWRk13R5kNMc2356wXj//+b1UuufLSZ8/0Dc8rpvPBwV8diT/+6FOyllpmds1ABer8stG1a9d22bb9gBlJrN1xy3rD6l4K9fUgBJTLqMMH2PT8Q7ixJOmCplJyaJ7RSnY0gyF8zHiK/HSBuqZaxgfH8X1on91Ioi5JW7PJXSrFvIuvIRgfxpjdDTU1kExCucRNP7zfdt3kT06d7Lt93uILg+npbMQp2p4Zj+rBU2cwLZOhoaFzA7juuutm2ra9+2+WLp0zM2rRfOmlEE/CgvkhgNExqKsDw4DREf7bC/fxxN4RAg35nIfveoyNp7EMi6aWegxTUMlV2L/petquuA5iMahUoKkJikVobYWpKWhuhkRC67eOFs3Pfa6mY8bMmBmRTuAGQqGFKS3lug6GYTA8PHxuAGvWrNl27bp1G3/54m5um32cm9b/NdTVQ0M9xOMhCCsSHsN8GzJpSKWgVMQ7sJe5997J/IUX8MLnvo5AIhwHGhohGoVEInyuXA6PsRhks6EWPE/T3KyZGA+Mz9xo3fa1L4tCKc8Vqy81dz+33395xytMTk6cOw6sX7++XQhxY2tLO++8+XNuuu0JkAbf+OlXefLFCnW1Fq9++kasLV8B14V3vUJdPQQBxBOYc+fT2lJHuVgG30PMmlsFbYVaSyRASpiYYNszd7GnZPOL3Tat7XFeWLlWRK7fIGhtkwAqUJ80LGvfLTffbDzywOO+lOI3k1hrfVVnZ6d54OAhvnhtB0SjrLz3Dn72TBHDkJQrgkX/8OxZmVJQHU2GAlav0zkbPyD8zTTD2a6rC80klYJMhvQzP+Zbz6bZ8YqDUopcxuGxwX2hWY2OAtA1q2Pj7O5ZFMpFd3RkIirEvwDA87yls2bN5ujRt/jTpk04Tz7GidMe8bhESolpSpKJGLjOrwMAUApMC9HaQSphIbREKSc0m5kzq3HdDo/RKI1zL8GMRDBNSTyZQAnJjyfc8P66OoJv3RXc/c0/+8PsxKQ8Mfi2Tk9mEucTiVfOmTOHkYG3kAsW8WbhbQwZCi+EwPNg6ZLa0CMZRjjDQoTCBwEIgU5PUCr7YAgwZKgdKcN7LCvsgBoZRkqor49RkzDpnl2L4xngeSEvYjEA2moLxl/c8TfCNIzc2NjYr2ejW7ZsublSqTSXy+UJz/M+FolErpLSwK2MQDLJJ264g5Y37yad00gDLlsa50d3/newnRCA1mGX8j1taMfGrri0tNUhYymIRs7SkBkKWFeHXLuOI67HDW//ivmzUhzrLdM50wrNrbER4nEjuPfbp4y7vuVu/cbHxVB/nVx77doZiURixoMPPnjQBG4uFouPXn311WJycpJUKkVHRwdf+S93cOXy+lCwWIyj33sQdr8C8xfAZZeGggZBKJjrhedShoB8D2FalApl+k4OETgFxNAAYubs0Paj0ZD8ngeWhVh/Pc9eeRX09aKbMojlF4fC2zYUS6ixkRTAT7YXo7/7u78XbWxsfHHnzp1zW1tbN5nA/EcffZTXX3+d5uZmpqam6OnpAXj7po7uC3HdCIYR+uxrrgm9R7n8/iwa1Yz8XU1ICUISVPIEgSafzeBVRjGbZ4bP+v6vG2siEY4zZw50dCCEgOnpcBzPA6307fpY6mPz2kZtTxzbvn17ZHJyclZPT48G2kxgG1DX09OzuKenpxEYBV4Atke07MP3358t2w5dpmlWTUW8/xuEPAgCME1EbZJETRzXcbAreeJeBXwvHMcx34vmFIuhRt6NB6b5fozI5dD5gt69a8ydmHD705nx4319ffXA08BB4BETeAf45lmEVoAGGkeFrd5VM57He2DeJWTgV28lBKFUCMiQyHgNhgGeozAbkpCMQuC977Wi0dAJFIshUb2qGfo+5HIhIK25pfcppiZyg+lM5k7gjeomwz9bUurquvfspnq1lyafS77n300TTKNqNlVzQYNWoHyIxMJ7fB83M0Cl7KJ8MKwkWigQGiFU+Hy5CNIIgfgexKKQyYacskxQIcdcp+znclP/CHjvz9b5rYnd6XwiZ6cHu2LxRFV4EywjTAGT8SoQCYGAQELgQDQFRhQZiWMqiMYiGGYcnc8hymegvikUJfDQpgGegzCikE1D1EJPTSJiMdASnc+RyfhTnqcrVQDBeQNYu/b6ZTk3sshsm40uFhCGUbV/A+LRqtcR4bXSoQa0AisJUmA1dmOgEIHASDUgY60QTcDAMHgu2nFDDpkGSIl65RW0bWMsvyQ0rWQC3ddLY8eKjs7OAy3Dw8Nu1bzPD4BlsWXttVfLP3n7af686zKscinUgBBs/6tvcMeIiedLls+LsO0TK0l8aQt4lVD1SoGZZ+nsGLmSxs8NIHMeUkdBmnzhobt4o9dFKUGmEOArn8ZIwBMXNLAwmUJcMBc9DV8+uZNPrdooJqemLx8eHv7JBwE454JGSrmkvb2NV/afpOiOoCpFcF0e+s4fc/tphSF9kvGAk0MO3f/wIn95/xZQCj1yCj16HJ0d5fSky8G+AkZdfbi5VSXwonrBZM5jMl+h4BTJlQucmsrxHZFGpFIgBWJkjGMnhujs7CSXy7VVTej8ATz//PP24OAAiy+6iuODr4dxwPe4a1hgGj5BEOD7PkHgEY/6fGdHganv/g8oV9CZHMFUniAQKAWV00Mo7UG5gv3oT7n76SyBCrA9D8/3UUqhlOalvgRqZBj31T382fAPWbzkSnp7ezhy5Ig6F4nPCcBxnANPPP44V1zxKd4+PokuFtHZLIjgPeHf7YHvEzccvv6r16Bso0pF9FiGkhPGilLPaZRbBDS3nHqNqKWwPRfPDyciCAKElHS3taCyWd469CK7Tlp8avUatm3bBnAKcD+UBoCH9u3b59fUJPll1wqmTxxAlwp8vT2gYvu/DsB1USpg56RCFbLoTB4xmiFbDmmWOdFLZvQoXu87nJxwCVSAXxVcKYXWmkUdnXwtP07+9An2lcos67gYKQQHDhzwgeeA0ocFcBx4+P77/5zrrt/A9zNjBEMD/NHFnyYZU9jOWQA8j7Lrc3Wzj57KIHMV5NA4ni+QhqA4OI4uOJQqY3wiFuB6wXszr5SivqaOrlSMS5sbGBw/w+FUC1d86cvcc89WgBeBw0Dxo9TI7jxy5IiTTMQ4Pn8l+4+8hC4WGVy1hsVzTfIFl3LFJ1tRxE3F33/ieoyxLMZ0AQYGQEgiEYv92QJm1iNIp/nbhctIRRWeF9o+IsLGzjp+UGPiDA7wvxKSusWXUyoV6O3tdaq74z0fFAPOB8DYvHnzjgeBz549r/JVZb/21rFd4Hvs+fgaKqsu5+SsFNOLZtF/48Yws8xkoVAk23+CSMTENCTPeGDlA1KjFQDOfPIy+ltjPNcSZfKSedzf0EAwcIbvRT12VWTPm739WJbF/Pnze6o5T+4jVSm3bNmyadWqVRclEgkGB/uDN9+x7/hWtLJj/4lXYHwCYVl0zr+EeNfccEdhYiLMJHM5DhUnsKTEkoKjZbAKLrF0mdR4HiamaGzvYsWFC5GFAsXek3w76usnHfXaiUnnsV8ee1OnUilWrlz5sc9+9rNLP8j7/Eu709HNmzc/XF9ff/fGjRvlrbfeSj6ffxT47slR9/CJGUabUxpasNi1hAwU2rHBsVGug3YdhB+w1R6htygxpKDoCf7Y0AjHxnXKCD9ABQp3coLh/BR/FdPByxW1++RUsB04ADTs3bt3/tatW+XQ0NCNS5YsueCNN97Y8UFmdC4A64H7Vq9eLTZv3sz09PRB4LeBCpAdHHePnYqI8sFEfvGy8XQsJSMo10H5DsqpoD2HezMZKp5EAkIIbvCnSUhJOXApuRWypTS/CGy+FyG/s6ieGcyoHcBbwEngiVwud81jjz3WvmnTJvHss88uGxsb21/977xqZJcBu4BYtcz0laobey/TAC6wLK5YNjf5pSsNtWJzVkfbUk3Eogl832HZdAE/CLNWpWFzjc/vIZl0CrwYkRzSyjlS0UdOpIPnleIU0Af0V7fxbaAGeADYBBSAVdV0+rwA1AAXAwPAuWrDZrX4Nz9qsWTejNi6rpi+qMMQ7bVg/Wg4jikFEk2gNU3RgJVR2zvtM37G1Sf70v6rSjEEDAGDwAiQrQass1s3MAt47YNc6f9tpV5UwXYAXUCHlLQnY7Kr7MoOQ0orXMcrrbWe0joYVYoskAGmgAlgHEhXNRz8W31qYFXLUI3VXgckgUiVZ+/mMnZ1FnNn9fK58px/i28lTCBa5U6sCkCeVel0q9Ueu3ruf1TB/19/7CGqgot/8g511pr7X6X9nwEAeWN4m9aIH+AAAAAASUVORK5CYII=';
    //var img = "#";

    this.id = 0;
    this._posy = (-50);
    this._rotation = 0;
    this._turningWhile = 0;
    this._isSpawning = true;
    this._hp = 100;
    this._amIDead = false;
    this._opacity = 1;


    this._turningChance = 30;
    this._fowardChance = 100 - this._turningChance;
    this._rotateThreshold = 2;
    this._movePxThreshold = 1;
    this._outOfScreenThreshold = 20;//usado para saber se o bug esta fora da tela
    this._posx = this.getRandomInt(this._outOfScreenThreshold, window.innerWidth - this._outOfScreenThreshold);

    this.setID = function(i){
      this.id = i;
    }

    this.getID = function(){
      return this.id;
    }

    this.getImg = function(c){
      if (c){
        return img_sec;
      }
      else {
        return img;
      }
    }
}

Bug.prototype.amINearWhichBounds = function(){
    var left = false, right = false, top = false, bottom = false;
    var w = window.innerWidth, h = window.innerHeight;

    if (this._posx > (w - (this._outOfScreenThreshold)))
        right = true;

    if (this._posy > (h - (this._outOfScreenThreshold)))
        top = true;

    if (this._posx < (this._outOfScreenThreshold))
        left = true;

    if (this._posy < (this._outOfScreenThreshold))
        bottom = true;

    return {top: top, bottom: bottom, left: left, right: right};

};

Bug.prototype.AmIOffScreen = function(){
    if (
            (!this._isSpawning) &&
            (
                !this.isBetween(this._posy,(-this._outOfScreenThreshold), window.innerHeight + this._outOfScreenThreshold) ||
                !this.isBetween(this._posx,(-this._outOfScreenThreshold), window.innerWidth + this._outOfScreenThreshold)
            )
        ){
        return true;
    }
    return false;
};

Bug.prototype.move = function(){
    if (this._amIDead)return;

    if (this.AmIOffScreen()){this.resetMe();}

    var moveFw, turnL, turnR;
    moveFw = this.shouldIMoveFoward();
    turnL = this.shouldITurnLeft();
    turnR = this.shouldITurnRight();

    if (this.spawnControl()){
      this.moveFoward();
      this.drawMe(this.id);
      return;
    }

    var mustGoTo = this.forceMeTurnThatWay();
    if (mustGoTo == "left"){
      this.turnLeft();
      this.drawMe(this.id);return;
    } else if (mustGoTo == "right"){
      this.turnRight();
      this.drawMe(this.id);return;
    }


    if (moveFw){this.moveFoward(); this.drawMe(this.id); return;};

    if (turnR && turnL){
        var unTie = Math.random() * 100;
        turnL = (unTie > 50);
        turnR = !turnL;
    }

    if (turnR){this.turnRight(); this.drawMe(this.id); return;};

    if(turnL){this.turnLeft(); this.drawMe(this.id); return;};
    this.drawMe(this.id);
};

Bug.prototype.spawnControl = function(){

      if (this._isSpawning && this._posy <= this._outOfScreenThreshold)
          return true;
      else if (this._isSpawning)
          this._isSpawning = false;
        return false;
};

Bug.prototype.shouldIMoveFoward = function(){

    var bounds = this.amINearWhichBounds();
    if (bounds.bottom && this._rotation == 0)
        return true;

    if (bounds.top || bounds.bottom || bounds.left || bounds.right)
        return false;

    if (this._turningWhile !== 0) return false;

    var chance = Math.random() * 100;
    return (chance < this._fowardChance);
};

Bug.prototype.shouldITurnLeft = function(){
    /*if (this._turningWhile >= 0) return false;

    if (this._turningWhile < 0) return true;
*/
    var chance = Math.random() * 100;
    return (chance < this._turningChance);
};

Bug.prototype.shouldITurnRight = function(){
    /*if (this._turningWhile <= 0) return false;

    if (this._turningWhile > 0) return true;
*/
    var chance = Math.random() * 100;
    return (chance < this._turningChance);
};

Bug.prototype.forceMeTurnThatWay = function(){
    var bounds = this.amINearWhichBounds();
    var moveTo = "";

    if (bounds.top || bounds.bottom || bounds.left || bounds.right)
    {
        this._turningWhile = 0;

        var quad = (this._rotation >= 180);
        if (quad && (moveTo === "") && ((bounds.top && bounds.right) || (bounds.bottom && bounds.right) || (bounds.bottom) || (bounds.bottom && bounds.left)/*180*/ || (bounds.left && bounds.top)))
            moveTo = "left";

        quad = (this._rotation < 180);
        if (quad && (moveTo === "") && ( (bounds.bottom) || (bounds.bottom && bounds.left)))
            moveTo = "left";


        quad = (this._rotation < 180);
        if (quad && (moveTo === "") && ((bounds.top) || (bounds.top && bounds.right) || (bounds.right) || (bounds.left && bounds.top) || (bounds.left) /*<180*/|| (bounds.bottom && bounds.right)))
            moveTo = "right";

        quad = (this._rotation >= 180);
        if (quad && (moveTo === "") && ((bounds.top) || (bounds.right) ||  (bounds.left) ))
            moveTo = "right";
    }
    return moveTo == ""?"dontMove":moveTo;
}

Bug.prototype.turnLeft = function(){
    if (this._turningWhile == 0)
    {
        this._turningWhile = Math.floor(Math.random() * 10)+1;
    }
    this._turningWhile = this._turningWhile - 1;
    this._rotation = this._rotation - this._rotateThreshold;
    this.moveFoward();
};

Bug.prototype.turnRight = function(){
    if (this._turningWhile == 0)
    {
        this._turningWhile = (-Math.floor(Math.random() * 10))-1;
    }
    this._turningWhile = this._turningWhile + 1;
    this._rotation = this._rotation + this._rotateThreshold;
    this.moveFoward();
};

Bug.prototype.moveFoward = function(){
    var tetaX = 0;//sin
    var tetaY = 0;//cos
    var sin = 0;
    var cos = 0;

    if (this._rotation >= 360)
        this._rotation = this._rotation - 360;
    if (this._rotation < 0)
        this._rotation = this._rotation + 360;

    tetaX = 360 - this._rotation;
    tetaY = this._rotation;

    if (tetaX >= 360)
        tetaX = tetaX - 360;

    if (tetaY >= 360)
        tetaY = tetaY - 360;

    sin = this.sinDegrees(tetaY);
    cos = this.cosDegrees(tetaX);

    this._posx = this._posx + (sin * this._movePxThreshold);
    this._posy =this._posy + (cos * this._movePxThreshold);

};

Bug.prototype.isBetween = function(val, min, max){
    if (val > min && val < max)
        return true;
    return false;
};

Bug.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Bug.prototype.drawMe = function(id){
    var bug = document.getElementById(this.id);
    bug.style.bottom = this._posy+"px";
    bug.style.left = this._posx+"px";
    bug.style.transform = "rotate("+this._rotation+"deg)";
};

Bug.prototype.resetMe = function(){
    this._posx = this.getRandomInt(this._outOfScreenThreshold, window.innerWidth - this._outOfScreenThreshold);
    this._posy = (-48);
    this._rotation = 0;
    this._turningWhile = 0;
    this._isSpawning = true;
    this._hp = 100;
    this._amIDead = false;
    this.drawMe(this.id);
};

Bug.prototype.setHealth = function(){
      var bugHpBar = document.getElementById("hp" + this.id);
      bugHpBar.parentElement.style.display = "block";

      if (this._hp < 40)
        bugHpBar.style.backgroundColor = "red";
      else if (this._hp < 70)
        bugHpBar.style.backgroundColor = "yellow";


      bugHpBar.style.width = this._hp+"%";
};

Bug.prototype.getHit = function(damage){
    if (this._hp <= 0)return;

    this._hp = (this._hp - damage) < 0 ? 0 : (this._hp - damage);
    this.setHealth();

    if (this._hp == 0)
    {
      this._amIDead = true;
      this.imDying();
    }
};

Bug.prototype.imDying = function(){
    var bug = document.getElementById(this.id);
    self = this;
    var it = setInterval(function(){
        self._opacity = self._opacity - 0.1;
        self._opacity = self._opacity < 0.1 ? 0 : self._opacity;
        bug.style.opacity = self._opacity;
        if (self._opacity < 0.00001){
          bug.style.zIndex = (-1000-self.id);
          clearInterval(it);
        }
    }, 100);
};

Bug.prototype.sinDegrees = function(angle) {return Math.sin(angle/180*Math.PI);};
Bug.prototype.cosDegrees = function(angle) {return Math.cos(angle/180*Math.PI);};








/*-----------------------------------------------------*/
function Swarm(){
    var swarmLenght = 50;
    var bugMoveInterval = 15;
    var bugColor = 'default';
    var color = 'red';

    var swarm = {};

    Swarm.prototype.setColor = function(cl){
      color = cl;
    }

    Swarm.prototype.getColor = function(){
      return color;
    }

    Swarm.prototype.setBugColor = function(cl){
      bugColor = cl;
    }

    Swarm.prototype.getBugColor = function(){
      return cl;
    }

    Swarm.prototype.spawnTheSwarm = function (){
      var i = 0;
      var tmId = 0;
      tmId = setInterval(function () {
          if (i < swarmLenght){
            spawnABug(i);
            i = i + 1;
          }
          else {
            clearInterval(tmId);
          }
      }, Math.floor(Math.random() * (1000 - 10 + 1)) + 10);
    };

    var spawnABug = function(id){
        swarm[id] = new Bug();
        swarm[id].setID(id);
        if (createBugElement(swarm[id]))
        {
            var iID = setInterval(function(){
                swarm[id].move();
            }, bugMoveInterval);
            swarm[id].iID = iID;
        }
    };

    var createBugElement = function(bug){
        var node = document.createElement("DIV");
        var img = document.createElement("IMG");
        var maxHp = document.createElement("DIV");
        var hp = document.createElement("DIV");

        node.appendChild(img);
        node.appendChild(maxHp);

        node.id = bug.getID();
        node.style.position = "fixed";
        node.style.bottom = "-100000px";
        node.style.left = "-100000px";
        node.style.transform = "rotate(0deg)";

        maxHp.style.position = "relative";
        maxHp.style.display = "none";
        maxHp.style.width = "100%";
        maxHp.style.height = "5px";
        maxHp.style.backgroundColor = "grey";
        maxHp.appendChild(hp);

        hp.id = 'hp' + node.id;
        hp.style.position = "absolute";
        hp.style.width = "100%";
        hp.style.height = "100%";
        hp.style.backgroundColor = "green";

        switch (bugColor){
          case 'red':
            img.src = bug.getImg(true);
          break;
          case 'yellow':
            img.src = bug.getImg();
          break;
          default:
            if (color == 'red'){
              img.src = bug.getImg(true);
              color = 'yellow';
            }
            else {
              img.src = bug.getImg();
              color = 'red';
            }
          break;
        }
        node.onclick = function(){
          swarm[node.id].getHit(swarm[node.id].getRandomInt(10, 40));
        }
        return (!!document.body.appendChild(node));
    };
}




$(document).ready(function(){
  $(document).on("keydown", function(e){
    if (e.ctrlKey && e.shiftKey && e.keyCode == 66)/*ctrl b*/{
      var swarm = new Swarm();
      swarm.setBugColor('yellow');
      swarm.spawnTheSwarm();
      return;
    }

    if (e.ctrlKey && e.altKey && e.keyCode == 66)/*ctrl b*/{
      var swarm = new Swarm();
      swarm.setBugColor('red');
      swarm.spawnTheSwarm();
      return;
    }

    if (e.ctrlKey && e.keyCode == 66)/*ctrl b*/{
      var swarm = new Swarm();
      swarm.spawnTheSwarm();
    }
  });

});
