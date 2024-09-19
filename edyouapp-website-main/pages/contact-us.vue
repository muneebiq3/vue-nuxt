<template>
  <div>
    <HeaderV />
    <div class="inner-top"></div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="page-heading">
              <h1>Contact Us</h1>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap-contact">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-detail">
              <div class="contact-info">
                <label>Email</label>
                <a href="mailto:supportme@edyou.com">supportme@edyou.com</a>
              </div>
              <div class="contact-info">
                <label>Phone</label>
                <a href="tel:+1 607 254 4636">+1 607 254 4636</a>
              </div>
              <div class="contact-info">
                <label>Address</label>
                <p>Ithaca, NY 14850, United States</p>
              </div>
              <!-- <div class="contact-info">
                <label>Social</label>
                <a href=""> Twitter / Linkedin</a>
              </div> -->
            </div>
          </div>
          <div class="col-md-6 searching">
            <b-form @submit="onSubmit" @reset="onReset" v-show="show">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" type="text" placeholder="What’s your name?"
                  required></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input id="input-2" v-model="form.email" type="email" placeholder="What’s your email?"
                  required></b-form-input>
              </b-form-group>


              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input id="input-3" v-model="form.phone" type="text" placeholder="What’s your phone no?"
                  required></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" label-for="input-4">
                <!-- <b-form-input id="input-4" v-model="form.subject" placeholder="Subject" required></b-form-input> -->
                <b-form-select v-model="form.subject" :options="options" type="select" class="form-control"
                  name="select-state" aria-label="State" aria-labelledby="state" required></b-form-select>
              </b-form-group>

              <b-form-textarea id="textarea" v-model="form.detail" placeholder="Tell me more about" rows="9"
                max-rows="9"></b-form-textarea>

              <b-button type="submit" variant="primary">Send</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </section>



    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: "", text: 'Please select an option', disabled: true },
        { value: 'suspended_account', text: 'Suspended Account' },
        { value: 'account_access_issue', text: 'Account Access Issue' },
        { value: 'account_privacy_issue', text: 'Account Privacy on Edyou' },
        { value: 'copyright_content', text: 'Copyrigt Content' },
        { value: 'other_support', text: 'Other Support' },
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        subject: "",
        detail: "",
        user_id: "",
      },
      show: true
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();

      let formData = JSON.stringify(this.form);

      if (this.isEmailValid()) {
        await this.$axios.$post('https://api.prod.edyou.io/apanel/v1/support', {
          ...this.form
        }).then(res => {
          // fetch("https://api.prod.edyou.io/apanel/v1/support", {
          //   method: "POST",
          //   headers: {
          //     'Accept': 'application/json',
          //     'Content-Type': 'application/json'
          //   },
          //   body: formData
          // }).then(res => {
          debugger;
          if (res.status_code == 200) {
            event.target.reset();
          }
        });
      } else {
        return
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: "",
        detail: "",
        user_id: "",
      }
      this.$nextTick(() => {
        this.show = true
      })
    },
    isEmailValid() {
      return /^[^@]+@\w+(\.\w+)+\w$/.test(this.form.email);
    }
  },
}
</script>

<style scoped>
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
  color: #000000;
}

.page-heading p {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 350;
  font-size: 22px;
  line-height: 31px;
  color: rgba(0, 0, 0, 0.9);
}

section.wrap-content h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: #000000;
  margin: 20px 0;
}

section.wrap-content p,
section.wrap-content li {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
}

section.wrap-content {
  margin: 30px 0;
}

.contact-info {
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: "Gill Sans", sans-serif;
  font-style: normal;
  font-weight: 350;
  font-size: 24px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.9);
  display: block;
}

.contact-info label {
  display: block;
  line-height: 1;
  margin: 0;
}

.contact-info a,
.contact-info p,
.contact-info a:hover {
  color: #000;
  font-weight: 400;
  text-decoration: none;
}

section.wrap-contact {
  margin-top: 50px;
}

.searching .form-control {
  resize: none;
  overflow: hidden !important;
  margin-bottom: 20px;
}

.searching .form-control {
  background: #f0f0f0;
  border-radius: 5px !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  opacity: 0.7;
  height: 50px;
  border: none;
}

.searching textarea.form-control {
  height: 200px;
  padding: 10px;
  font-size: 18px;
}

.searching input.form-control::placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  opacity: 0.7;
}

.searching input.form-control:-ms-input-placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  opacity: 0.7;
}

.searching select.form-control {
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  opacity: 0.7;
}

.searching input.form-control::-ms-input-placeholder {
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  opacity: 0.7;
}

.searching button.btn.btn-primary {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  color: #FFFFFF;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 137px;
  background: #3a814e;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 50px;
  border: none;
}
</style>
