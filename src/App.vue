<script setup>
import { computed, ref } from "vue";
import useASNG from "./composeables/asng";
import { useClipboard } from "@vueuse/core";

const { toASNGSentence, toNormal } = useASNG();
const { copy, copied } = useClipboard();

const isAsng = ref(true);

const normal = ref("");
const asng = ref("");

const result = computed(() => {
  if (isAsng.value) {
    return toASNGSentence(normal.value);
  } else {
    return toNormal(asng.value);
  }
});

const changeMode = () => {
  isAsng.value = !isAsng.value;
  clearField();
};

const clearField = () => {
  normal.value = "";
  asng.value = "";
};

const toGithub = () => {
  window.open("https://github.com/jolangker/asng-converter", "_blank");
};
</script>

<template>
  <main class="max-w-6xl mx-auto px-8 py-16">
    <div>
      <h1 class="text-4xl lg:text-6xl font-semibold text-center">ASNG CONVERTER</h1>
    </div>
    <div class="mt-8">
      <button class="btn btn-primary btn-sm w-full">
        Mode : {{ isAsng ? "Normal to ASNG" : "ASNG to Normal" }}
      </button>
    </div>
    <div class="mt-4 grid grid-cols-1 lg:grid-cols-[1fr,120px,1fr] gap-4">
      <div class="order-1 lg:order-0 card bg-base-200">
        <div class="card-body">
          <h2 class="card-title">{{ isAsng ? "Normal" : "ASNG" }}</h2>
          <textarea
            v-if="isAsng"
            v-model="normal"
            class="textarea textarea-bordered w-full resize-none font-semibold"
            rows="7"
            min
          ></textarea>
          <textarea
            v-else
            v-model="asng"
            class="textarea textarea-bordered w-full resize-none font-semibold"
            rows="7"
            min
          ></textarea>
        </div>
      </div>

      <div class="order-0 lg:order-1 card bg-base-200">
        <div class="card-body px-8">
          <h2 class="card-title font-bold self-center hidden lg:block">#</h2>
          <div class="flex space-x-3 lg:space-x-0 lg:space-y-2 lg:flex-col">
            <div class="tooltip flex-grow" data-tip="Change Mode">
              <button class="btn btn-primary w-full" @click="changeMode">
                <i class="fa-solid fa-repeat"></i>
              </button>
            </div>
            <div class="tooltip flex-grow" :data-tip="!copied ? 'Copy Result' : 'Copied!'">
              <button class="btn w-full" :class="{ 'btn-success': copied }" @click="copy(result)">
                <i class="fa-solid fa-copy"></i>
              </button>
            </div>
            <div class="tooltip flex-grow" data-tip="Clear Input">
              <button class="btn w-full" @click="clearField">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="tooltip flex-grow" data-tip="Source Code">
              <button class="btn w-full" @click="toGithub">
                <i class="fa-brands fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="order-2 card bg-base-200">
        <div class="card-body">
          <h2 class="card-title">{{ !isAsng ? "Normal" : "ASNG" }}</h2>
          <textarea
            v-model="result"
            class="textarea textarea-bordered w-full resize-none font-semibold"
            rows="7"
            min
            readonly
          ></textarea>
        </div>
      </div>
    </div>
  </main>
</template>
