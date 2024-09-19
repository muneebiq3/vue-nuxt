<template>
  <div>
    <HeaderV />
    <div class="inner-top"></div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="page-heading">
              <h1>Eligible USA Colleges & Universities</h1>
              <p>If you do not see your school for some odd reason, please contact us</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="uni-listing">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <router-link to="/contact-us" class="link btn-green">Contact us</router-link>
          </div>
          <div class="col-md-3">
            <b-form-select v-model="form.state" :options="options" type="select" class="form-control"
              @change="onChange($event)" required></b-form-select>
          </div>
          <div class="col-md-6">
            <b-input-group class="searching">
              <b-input-group-prepend>
                <span class="input-group-text"></span>
              </b-input-group-prepend>
              <b-form-input v-model="filter" class="LoginInput" size="lg" placeholder="Search school...">
              </b-form-input>
            </b-input-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="uni-city">
              <h1 class="toCapitalize">{{form.state}}</h1>
              <div class="uni-list">
                <b-table :items="universities" :fields="fields" :filter="filter">
                  <template #cell(Link)="data">
                     <a :href="'//'+data.value" class="link btn-default" target="_blank">{{data.value}}</a>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
</div>
</template>

<script>
import { upperCase } from 'lodash';

export default {
  data() {
    return {
      filter: '',
      fields: [],
      options: [],
      universities: [],
      form: {
        state: "alabama",
      },
    }
  },
  methods: {
    async getStates() {
      await this.$axios.$get('https://api.prod.edyou.io/auth/v1/states', {
      }).then(res => {
        this.options = res.map(ele => ({ value: ele, text: ele }));
      });
    },
    onChange($event) {
      this.getUniversities($event);
    },
    async getUniversities(state) {
      await this.$axios.$get(`https://api.prod.edyou.io/auth/v1/schools?state=${state}`, {
      }).then(res => {
        this.universities = res.map((ele, index) => ({ No: index + 1, University: ele.college, Link: ele.email_suffix }));
      });
    }
  },
  beforeMount() {
    this.getStates();
    this.onChange("alabama");

  }
};
</script>

<style>
.main-logo .nuxt-link-active a.img {
  background: url(~/assets/img/logo-new-black.svg);
}

a.link.btn-green {
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  color: #FFFFFF;
  width: 150px;
  height: 50px;
  left: 0px;
  top: 137px;
  background: #3a814e;
  border-radius: 153px;
  display: inline-block;
  margin-bottom: 50px;
}

.inner-top {
  padding-top: 80px;
}

.page-heading {
  margin-top: 40px;
}

.page-heading h1 {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 51px;
  color: #1d1d1f;
}

.page-heading p {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 350;
  font-size: 22px;
  line-height: 31px;
  color: rgba(0, 0, 0, 0.9);
}

.uni-city h1 {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  color: #1d1d1f;
}

.uni-list table thead th {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 350;
  font-size: 18px;
  line-height: 25px;
  border: none;
}

.uni-list table tbody td,
.uni-list table tbody th {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #1d1d1f;
  vertical-align: middle;
}

.uni-list table thead th:last-child,
.uni-list table tbody td:last-child {
  width: 170px;
  text-align: center;
}

.uni-list table tbody td a {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  text-decoration-line: underline;
  color: #3a814e;
}

.uni-listing {
  margin-top: 50px;
}

.uni-city {
  margin-bottom: 25px;
}

.searching .input-group-prepend span:before {
  background-image: url(~/assets/img/search.svg);
  padding: 0;
  border: 0;
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  z-index: 9;
  pointer-events: none;
}

.searching .input-group-prepend span {
  padding: 0;
  background: transparent;
  border: 0;
}

.searching input.form-control {
  background: #f0f0f0;
  border-radius: 48px !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #1d1d1f;
  opacity: 0.7;
}

.searching input.form-control::placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #1d1d1f;
  opacity: 0.7;
}

.searching input.form-control:-ms-input-placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #1d1d1f;
  opacity: 0.7;
}

.searching input.form-control::-ms-input-placeholder {
  font-size: 16px;
  line-height: 17px;
  color: #1d1d1f;
  opacity: 0.7;
}
.toCapitalize{
  text-transform: capitalize;
}
td[aria-colindex="2"]{
  text-transform: capitalize;
}
@media (max-width: 640px) {
  section.uni-listing .input-group.searching {
    margin-bottom: 50px;
  }
}
</style>
