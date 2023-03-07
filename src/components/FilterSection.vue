<!--Only made the filter button for now, put in a placeholder place-->
<script setup>
import ModalRight from "./ModalRight.vue";
</script>
<template>
  <div class="close-filter">
    <ion-icon name="filter-outline" id="filter-button" @click="openFilter">
    </ion-icon>
  </div>

  <ModalRight v-show="isFilterVisible" @close="closeFilter">
    <template v-slot:header>
      <div class="filter-header">
        <h3 id="filter-h3">Filter</h3>
      </div>
    </template>

    <template v-slot:content>
      <div
        class="category-wrapper"
        id="color-wrapper"
        v-for="(object, index) in filterObjects.categories"
        :key="index"
      >
        <p class="filter-p">{{ object.category }}</p>
        <fieldset>
          <div class="input-wrapper">
            <div
              class="checkbox-wrapper"
              v-for="(name, id) in object.names"
              :key="id"
            >
              <input
                type="checkbox"
                :id="name.description"
                class="checkbox"
                :value="name.description"
                v-model="allFilter"
              />
              <label :for="name.description" class="label">
                {{ name.description }}
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      {{ allFilter }}
      <div class="button">
        <div class="button-wrapper">
          <input
            type="button"
            id="delete-button"
            class="filter-button"
            value="Reset filter"
            @click="clear"
            aria-label="Reset modal"
          />
        </div>
        <div class="button-wrapper">
          <input
            type="button"
            id="show-button"
            class="filter-button"
            value="Show"
            @click="closeFilter"
            aria-label="Close modal"
          />
        </div>
      </div>
    </template>
  </ModalRight>
</template>

<script>
export default {
  data() {
    return {
      isFilterVisible: false,
      allFilter: [],
      filterObjects: {
        categories: [
          {
            names: [
              { id: 1, description: "Small" },
              { id: 2, description: "Medium" },
              { id: 3, description: "Large" },
            ],
            category: "Size",
          },
          {
            names: [
              { id: 4, description: "Cat eye" },
              { id: 5, description: "Geometric" },
              { id: 6, description: "Round" },
              { id: 7, description: "Square" },
              { id: 8, description: "Rectangle" },
            ],
            category: "Shape",
          },
          {
            names: [
              { id: 9, description: "Mixed" },
              { id: 10, description: "Stainless steel" },
            ],
            category: "Material",
          },
          {
            names: [
              { id: 11, description: "Black" },
              { id: 12, description: "Clear" },
              { id: 13, description: "White" },
              { id: 14, description: "Brown" },
              { id: 15, description: "Red" },
              { id: 16, description: "Blue" },
              { id: 17, description: "Pink" },
              { id: 18, description: "Yellow" },
            ],
            category: "Color",
          },
        ],
      },
    };
  },
  methods: {
    clear() {
      this.allFilter = [];
    },
    openFilter() {
      this.isFilterVisible = true;
    },
    closeFilter() {
      this.isFilterVisible = false;
    },
  },
  components: {
    ModalRight,
  },
};
</script>
<style scoped>
#filter-button {
  position: absolute;
  right: 3vw;
  margin-top: 2vw;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}
.category-wrapper {
  border-bottom: solid 0.1px;
  border-color: rgba(124, 124, 124, 1);
  padding-bottom: 3vw;
}

.filter-header {
  display: flex;
  justify-content: center;
  margin-top: 10vw;
  margin-bottom: 0;
  padding-top: 3vw;
  padding-bottom: 2vw;
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
}

#filter-h3 {
  display: flex;
  margin-left: 100%;
  margin-right: 100%;
}
.filter-p {
  margin-left: 2vw;
  margin-top: 2vw;
  margin-bottom: 0;
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
}

fieldset {
  padding-top: 3vw;
}
.checkbox-wrapper {
  display: inline;
  flex-direction: row;
  border: solid 0.5px;
  border-radius: 5px;
  border-color: rgba(124, 124, 124, 1);
  background-color: rgb(230, 185, 192);
  margin-left: 3vw;
  padding: 1vw;
}
.label {
  font-family: "Quicksand", sans-serif;
  margin-left: 1vw;
  cursor: pointer;
}

input[type="checkbox"] {
  cursor: pointer;
}
input[type="checkbox"]:checked {
  accent-color: rgba(124, 124, 124, 1);
}
.input-wrapper {
  width: auto;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 1vw 0;
}

.input-wrapper::-webkit-scrollbar {
  display: none;
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  margin-top: 0vw;
}

#delete-button {
  width: 10rem;
  height: 3rem;
  margin: 1vw;
  background: rgba(134, 179, 147, 0.57);
  border-radius: 5px;
  border: none;
}

#show-button {
  width: 10rem;
  height: 3rem;
  margin: 1vw;
  background: rgba(134, 179, 147, 0.57);
  border-radius: 5px;
  border: none;
}
</style>
