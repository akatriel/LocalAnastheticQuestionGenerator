export interface Anasthetic {
    percentAnasthetic: number,
    mgPerKg: number | undefined,
    MRD: number | undefined,
    withVaso: boolean
}

export class Anasthetic implements Anasthetic {
        public static cartridgeVolume: number = 1.8;
        public mgPerHundredml(): number{ return this.percentAnasthetic * 1000;}
        public mgPerMl(): number{ return this.mgPerHundredml() / 100;}
        public anastheticPerCartridge(): number{ return this.mgPerMl() * Anasthetic.cartridgeVolume;}

        constructor(
        public percentAnasthetic: number,
        public mgPerKg: number | undefined,
        public MRD: number | undefined,
        public withVaso: boolean,
    ) { }
}

export class Articaine extends Anasthetic {
    constructor(
        public percentAnasthetic: number,
        public mgPerKg: number | undefined,
        public MRD: number | undefined,
        public withVaso: boolean,
    ) {
        super(
            percentAnasthetic,
            mgPerKg,
            MRD, 
            withVaso)
    }
}

export class Bupivicaine extends Anasthetic {
    constructor(
        public percentAnasthetic: number,
        public mgPerKg: number | undefined,
        public MRD: number | undefined,
        public withVaso: boolean,
    ) {
        super(
            percentAnasthetic,
            mgPerKg,
            MRD, 
            withVaso)
    }
}


export class Lidocaine extends Anasthetic {
    constructor(
        public percentAnasthetic: number,
        public mgPerKg: number | undefined,
        public MRD: number | undefined,
        public withVaso: boolean,
    ) {
        super(
            percentAnasthetic,
            mgPerKg,
            MRD, 
            withVaso)
    }
}

export class Mepivicaine extends Anasthetic {
    constructor(
        public percentAnasthetic: number,
        public mgPerKg: number | undefined,
        public MRD: number | undefined,
        public withVaso: boolean,
    ) {
        super(
            percentAnasthetic,
            mgPerKg,
            MRD, 
            withVaso)
    }
}

export class Prilocaine extends Anasthetic {
    constructor(
        public percentAnasthetic: number,
        public mgPerKg: number | undefined,
        public MRD: number | undefined,
        public withVaso: boolean,
    ) {
        super(
            percentAnasthetic,
            mgPerKg,
            MRD, 
            withVaso)       
       
       
       
       
    }
}
