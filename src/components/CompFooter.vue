<template>
  <div id="footer">
    <div class="row">
      <div class="col-sm">
        <ul class="footer-list">
          <h4>{{ Text1 }}</h4>
          <router-link class="contact-link" :to="{ path: `/about` }"
            ><li>About Us</li>
          </router-link>

          <router-link class="contact-link" :to="{ path: `/contact` }"
            ><li>Contact Us</li>
          </router-link>
          <li>Social Responsibility</li>
          <li>Partner With Us</li>

          <li>Blog</li>

          <router-link class="contact-link" :to="{ path: `/` }"
            ><li>Home</li>
          </router-link>
        </ul>
      </div>
      <div class="col-sm">
        <ul class="footer-list">
          <h4>{{ Text2 }}</h4>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Cookie settings</li>
        </ul>
      </div>

      <div class="col">
        <ul class="footer-list">
          <h4>{{ Text3 }}</h4>
          <li>Guarantees</li>
          <li>Terms of purchase</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="icon">
    <a href="https://www.instagram.com/" target="_blank"
      ><i class="bi bi-instagram"></i
    ></a>
    <a href="https://www.facebook.com/" target="_blank">
      <i class="bi bi-facebook"></i>
    </a>
    <a href="https://www.twitter.com/" target="_blank">
      <i class="bi bi-twitter"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Text1: "About Spectacular",
      Text2: "Policy",
      Text3: "Terms",
    };
  },
};
</script>
<style scoped>
#footer {
  margin-top: 20px;
}
.footer-list {
  list-style: none;
}
.row {
  margin-left: 5%;
  margin-right: 5%;
}

.icon {
  font-size: 1.9rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.bi {
  color: black;
  padding-right: 10px;
}
.contact-link {
  text-decoration: none;
  color: black;
}
.d-container {
  justify-content: flex-start;
  align-items: flex-start;
}

@media only screen and (max-width: 575px) {
  ol,
  ul,
  dl ul {
    margin-left: 30%;
  }
}
@media only screen and (max-width: 430px) {
  ol,
  ul,
  dl ul {
    margin-left: 25%;
  }
}
@media only screen and (max-width: 360px) {
  ol,
  ul,
  dl ul {
    margin-left: 10%;
  }
}
</style>
