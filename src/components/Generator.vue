<script setup lang="ts">
import { generatorStore } from '@/stores/generatorStore.js';
console.log('hi mom')
const store = generatorStore();
console.log(store.anasthetic)
console.log(store.anasthetic.constructor.name)

</script>

<template>
  <h1>Local Anasthetic Calculation Question Generator</h1>
  <p>*Answer to 2 decimal places when needed</p>
  <div class="questionGenerator">
    <h2>Patient weight: {{ store.patientWeightComputed }} kg</h2>
    <h2>Using: {{ store.anasthetic.percentAnasthetic }}% {{ store.anasthetic.constructor.name }}
      <span v-if="store.anasthetic.withVaso"> With Epi.</span>
    </h2>
    <hr />
    <form @submit.prevent>
      <h3>
        <p>{{ store.MRD_questionText }}</p>
        <input v-model.number="store.answer_MRD" :disabled="!store.anasthetic.MRD" />
        <span v-if="!store.anasthetic.MRD">None Listed</span>
        <span v-if="store.answered_MRD_Correctly"><v-icon name="fc-checkmark" /></span>
      </h3>
      <h3>
        <p>{{ store.mgPerMl_questionText }}</p>
        <input v-model.number="store.answer_mgPerMl" />
        <span v-if="store.answered_mgPerMl_Correctly"><v-icon name="fc-checkmark" /></span>
      </h3>
      <h3>
        <p>{{ store.anastheticPerCartidge_questionText }}</p>
        <input v-model.number="store.answer_anastheticPerCartidge" />
        <span v-if="store.answered_anastheticPerCartidge_Correctly"><v-icon name="fc-checkmark" /></span>
      </h3>
      <h3>
        <p>{{ store.mgPerKg_questionText }}</p>
        <input v-model.number="store.answer_mgPerKg" />
        <span v-if="store.answered_mgPerKg_Correctly"><v-icon name="fc-checkmark" /></span>
      </h3>
      <h3>
        <p>{{ store.maxNumberCartridges_questionText }}</p>
        <input v-model.number="store.answer_maxNumberCartridges" />
        <span v-if="store.answered_maxNumberCartridges_Correctly"><v-icon name="fc-checkmark" /></span>
      </h3>
      <button @click="store.checkAnswer">Check Answers</button>
    </form>
    <hr />
    <div v-if="store.allCorrect">
      <h1>Correct!!!</h1>
      <button @click="store.$reset">Reset</button>
    </div>
    <div v-else>
      <h1>NOPE!!!</h1>
    </div>                  
  </div>


  <section class="footer">
    <p>Represents the maximum recommended dose (MRD) of LA that have been approved by the US FDA</p>
    <p>Malamed, Stanley F. Handbook of Local Anesthesia. Available from: Pageburstls, (6th Edition). Elsevier Health
      Sciences (US), [2013].</p>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  font-size: 1.5 rem;
}

h3 {
  font-size: 1.2rem;
}

.questionGenerator h1,
.questionGenerator h3 {
  text-align: center;
}

.footer {
  font-size: .75rem;
}

@media (min-width: 1024px) {

  .questionGenerator h1,
  .questionGenerator h3 {
    text-align: left;
  }
}</style>
