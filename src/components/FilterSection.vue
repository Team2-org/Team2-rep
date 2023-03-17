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
        <h2 id="filter-h2">Filter</h2>
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
            <!-- Checkbox-wrapper color will change start -->
            <div
              :class="[
                'checkbox-wrapper',
                { checked: isChecked(name.description) },
              ]"
              @click="toggleCheckbox(name.description)"
              v-for="(name, id) in object.names"
              :key="id"
            >
              <input
                type="checkbox"
                :id="name.description"
                class="checkbox"
                :value="name.description"
                v-model="allFilters"
              />
              <label :for="name.description" class="label">
                {{ name.description }}
              </label>
            </div>
            <!-- Checkbox-wrapper color will change end -->
          </div>
        </fieldset>
      </div>
      <div class="selected-wrapper" v-if="allFilters != null">
        <div
          class="selected-filters"
          v-for="(allFilter, index) in allFilters"
          :key="allFilter.id"
        >
          <div class="selected">
            {{ allFilter }}
            <ion-icon
              name="close-outline"
              id="remove-selected"
              @click="removeSelected(index)"
            ></ion-icon>
          </div>
        </div>
      </div>

      <div class="button">
        <div class="button-wrapper">
          <input
            type="button"
            id="delete-button"
            class="filter-button"
            value="Reset filter"
            aria-label="Reset modal"
            @click="clear"
          />
        </div>
        <div class="button-wrapper">
          <input
            type="button"
            id="show-button"
            class="filter-button"
            value="Apply"
            aria-label="Close modal"
            @click="closeFilter"
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
      allFilters: [],
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
    //Checkbox-wrapper color will change start
    toggleCheckbox(description) {
      const index = this.allFilters.indexOf(description);
      if (index === -1) {
        this.allFilters.push(description);
      } else {
        this.allFilters.splice(index, 1);
      }
    },
    isChecked(description) {
      this.allFilters.includes(description);
    },
    //Checkbox-wrapper color will change end
    clear(allFilters) {
      this.$emit("clear.filter", allFilters);
    },
    openFilter() {
      this.isFilterVisible = true;
    },
    closeFilter() {
      this.isFilterVisible = false;
      this.filterItems(this.allFilters)
    },
    removeSelected(index) {
      return this.allFilters.splice(index, 1);
    },
    filterItems(allFilters) {
      this.$emit("all-filters", allFilters);
    },
  },
  components: {
    ModalRight,
  },
  emits: ["all-filters"],
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
  border-color: rgb(0, 0, 0);
  padding-bottom: 3vw;
  margin: 0 10px;
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
#filter-h2 {
  font-size: 1.7rem;
  font-weight: 200;
  font-family: "Quicksand", sans-serif;
}
.filter-p {
  margin-left: 2vw;
  margin-top: 2vw;
  margin-bottom: 0;
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
}

fieldset {
  padding-top: 3vw;
}
.checkbox-wrapper {
  display: inline;
  flex-direction: row;
  border: solid 0.5px;
  border-radius: 5px;
  background-color: white;
  border-color: rgba(124, 124, 124, 1);
  margin-left: 3vw;
  padding: 1vw;
}
/* When Checked color will change */
.checkbox-wrapper.checked {
  background-color: rgb(230, 185, 192);
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
  color: aqua;
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
.selected-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10vw;
  margin-left: 5vw;
}
.selected {
  display: flex;
  border: solid 0.5px;
  border-radius: 5px;
  border-color: rgba(124, 124, 124, 1);
  background-color: rgb(230, 185, 192);
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 2vw;
  padding: 1vw;
  font-family: "Quicksand", sans-serif;
}
#remove-selected {
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.button {
  display: flex;
  justify-content: center;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
}
#delete-button {
  position: fixed;
  bottom: 10vw;
  left: 13vw;
  width: 9rem;
  height: 3rem;
  margin: 1vw;
  background-color: rgba(134, 179, 147, 0.57);
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

#show-button {
  position: fixed;
  bottom: 10vw;
  right: 5vw;
  width: 9rem;
  height: 3rem;
  margin: 1vw;
  background-color: rgba(134, 179, 147, 0.57);
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

@media screen and (min-width: 390px) {
  #delete-button {
    width: 10rem;
    left: 13vw;
  }

  #show-button {
    width: 10rem;
    right: 5vw;
  }
}
@media screen and (min-width: 600px) {
  .category-wrapper {
    margin: 0 20px;
    padding: 1vh 0;
  }
  .filter-header {
    margin-top: 4vh;
    padding-bottom: 0;
  }
  #filter-h2 {
    font-size: 2.5rem;
  }
  .filter-p {
    font-size: 1.8rem;
  }
  .checkbox-wrapper {
    margin-left: 1.8vw;
  }
  .label {
    font-size: 1.2rem;
    margin-left: 1vw;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 1.8vw;
    height: 1.8vw;
  }
  .button {
    margin-top: 8rem;
    font-size: 1.4rem;
  }
  #delete-button {
    width: 13rem;
    left: 35vw;
  }

  #show-button {
    width: 13rem;
    right: 5vw;
  }
}
@media screen and (min-width: 900px) {
  .category-wrapper {
    margin: 0 10px;
    padding: 0;
  }
  .filter-header {
    margin-top: 0.5vh;
    padding-bottom: 0;
  }
  #filter-h2 {
    font-size: 1.8rem;
  }
  fieldset {
    padding-top: 0;
  }
  .filter-p {
    font-size: 1.1rem;
    margin-top: 0.7vh;
    margin-left: 1vh;
  }
  .checkbox-wrapper {
    margin-left: 1.2vh;
    margin-bottom: 1vh;
    padding: 0vh 0.8vh;
  }
  .input-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5vh;
  }
  .label {
    font-size: 0.8rem;
    margin-left: 0.5vh;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 1.6vh;
    height: 1.6vh;
  }
  .selected-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3vh;
    margin-left: 3vh;
  }
  .selected {
    margin-left: 0.5vh;
    margin-right: 0.5vh;
    margin-bottom: 1vh;
    padding: 0.5vh;
    font-family: "Quicksand", sans-serif;
    font-size: 0.8rem;
  }
  #remove-selected {
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
  }
  .button {
    margin-top: 8rem;
    font-size: 1.2rem;
  }
  .button-wrapper {
    bottom: 5rem;
  }
  #delete-button {
    width: 10rem;
    height: 6vh;
    left: auto;
    right: 35vh;
    bottom: 3vh;
  }

  #show-button {
    width: 10rem;
    height: 6vh;
    right: 5vh;
    bottom: 3vh;
  }
}
@media screen and (min-width: 1100px) {
  #delete-button {
    width: 12rem;
    height: 6vh;
    right: 40vh;
  }

  #show-button {
    width: 12rem;
    height: 6vh;
    right: 10vh;
  }
}
</style>
