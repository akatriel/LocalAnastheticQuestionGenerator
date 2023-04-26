import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type Anasthetic, Articaine, Bupivicaine, Lidocaine, Mepivicaine, Prilocaine } from '@/models/anasthetic';

export const generatorStore = defineStore('generatorStore', () => {
    const anasthetics: Anasthetic[] = [
        new Articaine(4,7,undefined,true),
        new Bupivicaine(.5,2,90, true), //vaso canada
        new Lidocaine(2,7,500, true),
        new Mepivicaine(2,6.6,400, false),
        new Mepivicaine(3,6.6,400, true),
        new Prilocaine(4,8,600, false),
        new Prilocaine(4,8,600, true),
    ];

    const answer_MRD: Ref<number> = ref(0);
    const answered_MRD_Correctly = ref(false);
    const MRD_questionText = "What is the manufacturer's MRD of";

    const answer_mgPerMl: Ref<number> = ref(0);
    const answered_mgPerMl_Correctly = ref(false);
    const mgPerMl_questionText = 'What is the concentration of anasthetic in mg/ml';
    
    const answer_anastheticPerCartidge: Ref<number> = ref(0);
    const answered_anastheticPerCartidge_Correctly = ref(false);
    const anastheticPerCartidge_questionText = 'How many mg anasthetic per cartridge';

    const answer_mgPerKg: Ref<number> = ref(0);
    const answered_mgPerKg_Correctly = ref(false);
    const mgPerKg_questionText = 'How many mg/kg body weight can be tolerated (manufacturer)';

    const answer_maxNumberCartridges: Ref<number> = ref(0);
    const answered_maxNumberCartridges_Correctly = ref(false);
    const maxNumberCartridges_questionText = 'What is the max # of cartridges this patient can receive';


    const anasthetic = ref(getRandomAnasthetic(anasthetics));
    const patientWeightComputed = ref(generateWeight());

    const allCorrect = ref(false);
    function checkAnswer() {
        if(!anasthetic.value.MRD 
            || answer_MRD.value == anasthetic.value.MRD as number){
            answered_MRD_Correctly.value = true;
        }
        if(answer_mgPerMl.value == anasthetic.value.mgPerMl() as number){
            answered_mgPerMl_Correctly.value = true;
        }
        if(answer_anastheticPerCartidge.value == anasthetic.value.anastheticPerCartridge() as number){
            answered_anastheticPerCartidge_Correctly.value = true;
        }
        if(answer_mgPerKg.value == anasthetic.value.mgPerKg as number){
            answered_mgPerKg_Correctly.value = true;
        }
        if(calculateMaxNumberCartridges(answer_maxNumberCartridges.value)){
            answered_maxNumberCartridges_Correctly.value = true;
        }

        if(answered_MRD_Correctly.value
            && answered_mgPerMl_Correctly.value
            && answered_anastheticPerCartidge_Correctly.value
            && answered_mgPerKg_Correctly.value
            && answered_maxNumberCartridges_Correctly.value) {
                allCorrect.value = true;
            }
    };

    function calculateMaxNumberCartridges(answer: number): boolean {
        let max = (anasthetic.value.mgPerKg as number 
            * patientWeightComputed.value)
                / anasthetic.value.anastheticPerCartridge();

        console.log(`computed max ${max.toFixed(2)}`);
        return parseFloat(max.toFixed(2)) == parseFloat(answer.toFixed(2))
    }
        

    function $reset(){
        patientWeightComputed.value = generateWeight();
        anasthetic.value = getRandomAnasthetic(anasthetics);
        answer_MRD.value = 0;
        answer_mgPerMl.value = 0;
        answer_anastheticPerCartidge.value = 0;
        answer_mgPerKg.value = 0;
        answer_maxNumberCartridges.value = 0;
        answered_MRD_Correctly.value = false;
        answered_mgPerMl_Correctly.value = false;
        answered_anastheticPerCartidge_Correctly.value = false;
        answered_mgPerKg_Correctly.value = false;
        answered_maxNumberCartridges_Correctly.value = false;
    }
    return {
        patientWeightComputed,
        anasthetics,
        anasthetic,
        checkAnswer,
        answer_MRD,
        answered_MRD_Correctly,
        answer_mgPerMl,
        answered_mgPerMl_Correctly,
        answer_anastheticPerCartidge,
        answered_anastheticPerCartidge_Correctly,
        answer_mgPerKg,
        answered_mgPerKg_Correctly,
        answer_maxNumberCartridges,
        answered_maxNumberCartridges_Correctly,
        MRD_questionText,
        mgPerMl_questionText,
        anastheticPerCartidge_questionText,
        mgPerKg_questionText,
        maxNumberCartridges_questionText,
        allCorrect,
        $reset
    };
});


function generateWeight(): number {
    return getRandomInt(35,200)
}

function getRandomAnasthetic(anasthetics: Anasthetic[]): Anasthetic{
    return anasthetics[getRandomInt(0, anasthetics.length - 1)];
}

function getRandomInt (min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

