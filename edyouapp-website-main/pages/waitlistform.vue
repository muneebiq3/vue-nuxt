<template>
    <div class="container-fluid p-0">
        <HeaderV />
        <div class="main-banner">
            <div class="container container-center">
                <div class="inner-top"></div>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 text-left">
                                <div class="">
                                    <b-icon-arrow-left-circle class="" @click="$router.go(-1)"></b-icon-arrow-left-circle>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="join-header-text text-left">Join the Waiting List and Secure Your Spot!</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="trext-left">Exciting things are coming, and you don't want to miss out!</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <b-form @submit.stop.prevent="onSubmit">
                                    <b-form-group id="select-state" label-for="state">
                                        <b-form-select id="state" name="state" v-model="$v.form.state.$model"
                                            :options="stateOptions" :state="validateState('state')"
                                            @change="onStateChange($event)" aria-describedby="state-select-feedback"
                                            aria-expanded="false" class="form-element"></b-form-select>

                                        <!-- <b-form-invalid-feedback id="state-select-feedback">This is a required
                                            field.</b-form-invalid-feedback> -->
                                    </b-form-group>

                                    <b-form-group id="select-university" label-for="university">
                                        <b-form-select id="university" name="university" v-model="$v.form.university.$model"
                                            :options="universities" :state="validateUniversity('university')"
                                            aria-describedby="university-select-feedback" aria-expanded="false"
                                            class="form-element"></b-form-select>

                                        <!-- <b-form-invalid-feedback id="university-select-feedback">This is a required
                                            field.</b-form-invalid-feedback> -->
                                    </b-form-group>

                                    <b-form-input id="email" name="email" v-model="$v.form.email.$model"
                                        :state="validateEmail('email')" aria-placeholder="Enter .edu email"
                                        placeholder="Enter .edu email" aria-describedby="email-input-feedback"
                                        class="form-element"></b-form-input>
                                    <!-- <b-form-invalid-feedback id="email-input-feedback">Invalid email address.
                                        <span v-show="form.university != null">Please use email of
                                            {{ form.university }}</span></b-form-invalid-feedback> -->

                                    <b-button type="submit" class="mt-4 form-control rounded-3 submit-btn"
                                        variant="primary">Submit</b-button>
                                </b-form>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="uni-listing">
                    <div class="container">

                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import Vue from 'vue';


export default {
    mixins: [validationMixin],

    data() {
        return {
            filter: '',
            fields: [],
            stateOptions: [{ value: null, text: "Select State..." }],
            universities: [{ value: null, text: "Select University..." }],
            show: true,
            errors: {},
            form: {
                state: null,
                university: null,
                email: null,
            },
        }
    },
    validations: {
        form: {
            state: {
                required
            },
            university: {
                required,
            },
            email: {
                required,
                email,
                async isValidEmail(value) {
                    if (this.universities.length == 1) {
                        return false;
                    }
                    if (this.universities.length != 1) {
                        let selectedUniversity = this.universities.find((res) => res.value == this.form.university);
                        if (this.form.email) {
                            if (this.form.email.split('@')[1] != selectedUniversity.email_suffix) {
                                return false;
                            } else if (this.form.email.split('@')[1] == selectedUniversity.email_suffix) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
            }
        },
    },
    methods: {
        async getStates() {
            await this.$axios.$get('https://api.prod.edyou.io/auth/v1/states', {
            }).then(res => {
                this.stateOptions = [{ value: null, text: "Select State..." }, ...res.map(ele => ({ value: ele, text: ele }))];
            });
        },
        onStateChange($event) {
            this.getUniversities($event);
        },
        onUniChange($event) {
        },
        async getUniversities(state) {
            await this.$axios.$get(`https://api.prod.edyou.io/auth/v1/schools?state=${state}`, {
            }).then(res => {
                this.universities = [
                    { value: null, text: "Select University..." },
                    ...res.map((ele, index) => ({ value: ele.college, text: ele.college, email_suffix: ele.email_suffix }))
                ];
            });
        },
        validateState(state) {
            const { $dirty, $error } = this.$v.form[state];
            return $dirty ? !$error : null;
        },
        validateUniversity(university) {
            const { $dirty, $error } = this.$v.form[university];
            return $dirty ? !$error : null;
        },
        validateEmail(email) {
            const { $dirty, $error } = this.$v.form[email];
            let selectedUniversity = this.universities.find((res) => res.value == this.form.university);
            if (this.form.email) {
                if (this.form.email.split('@')[1] != selectedUniversity.email_suffix) {

                    return false;
                } else if (this.form.email.split('@')[1] == selectedUniversity.email_suffix) {
                    return true;
                }
                return $dirty ? !$error : null;
            }
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                state: null,
                university: null,
                email: null,
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        async onSubmit(event) {
            event.preventDefault();
            this.$v.form.$touch();
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
                this.makeToast(
                    "error",
                    "danger",
                    "Please enter form details correctly!"
                );
                return;
            } else {
                // do your submit logic here
                this.submitStatus = 'PENDING';
                let formData = {
                    "state": this.form.state,
                    "email": this.form.email,
                    "college": this.form.university,
                    "created_at": new Date().getTime,
                    "updated_at": new Date().getTime
                }
                // let formData = JSON.stringify({
                //     ...this.form,
                // }
                // );
                try {
                    await this.$axios.$post('https://api.prod.edyou.io/apanel/v1/waitlist', {
                        ...formData,
                    })
                        .catch(function (error) {
                            if (error.response) {
                                // The request was made and the server responded with a status code
                                // that falls out of the range of 2xx
                                // console.log(error.response.data);
                                // console.log(error.response.status);
                                // console.log(error.response.headers);
                                const vm = new Vue();
                                debugger
                                if (Array.isArray(error.response.data.detail)) {
                                    error.response.data.detail.forEach(e => {
                                        vm.$bvToast.toast(`${e.msg}`, {
                                            title: `Error`,
                                            variant: "danger",
                                            solid: true
                                        });
                                    })
                                }

                                this.submitStatus = "ERROR";
                                return;
                            } else if (error.request) {
                                // The request was made but no response was received
                                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                // http.ClientRequest in node.js
                                // console.log(error.request);
                            } else {
                                // Something happened in setting up the request that triggered an Error
                                // console.log('Error', error.message);
                            }
                            // console.log(error.config);
                        })
                        .then(res => {
                            if (res.status_code == 200) {
                                debugger;
                                // event.target.reset();
                                this.makeToast("success", "success", "Successfully added record!");
                                $nuxt.$router.push(
                                    {
                                        path: `/waitlist-success`,
                                        query: {
                                            wait_list: `${res.data.wait_list_sequence}`
                                        }
                                    }
                                );

                            }
                            return
                        })
                } catch (error) {
                }

            }
        },
        makeToast(title = "", variant = null, body = "") {
            this.$bvToast.toast(body, {
                title: `${title}`,
                variant: variant,
                solid: true
            })
        },
    },
    beforeMount() {
        this.getStates();
        // this.onStateChange("alabama");

    },
};
</script>

<style>
.main-banner {
    background-image: url(~/assets/img/Bg.png);
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    background-attachment: fixed;
}

.container-center {
    width: 512px;
    height: 576px;
    top: 128px;
    left: 464px;
    border-radius: 16px;
    padding: 24px;
    gap: 32px;
    justify-content: space-between;
    background: white;
}

svg.bi-arrow-left-circle.b-icon.bi {
    font-size: 40px;
}

.join-header-text {
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
}

.form-element {
    height: 64px;
}

.submit-btn {
    height: 64px;
    background: #4EA064;
    border: #4EA064;
}

.submit-btn:active {
    background: #4EA064;
    border: #4EA064;
}

.submit-btn:hover {
    height: 64px;
    background: #4EA064;
    border: #4EA064;
}
</style>
