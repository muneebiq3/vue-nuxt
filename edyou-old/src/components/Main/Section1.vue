<template>

  <section class="container-fluid mt-0 section-1">

    <div class="row">

        <div class="col-lg-7 col-12 d-flex flex-column align-items-center text-center mt-3 pt-3">

            <p class="text-white fw-bold private-social-text mt-5 pt-5">

                The private social app made for 
                <span class="college-life-text d-inline-block">college life</span>.

            </p>

            <img src="src\Images\PNGs\line_home.png" alt="main heading underline" class="img-fluid line">
            
            <div class="mt-5 pt-5 pb-1 mt-md-3 pt-md-3 pb-md-0 ">

                <button type="button" class="btn btn-success join-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

                    Join Waitlist

                    <img src="src\Images\icons\Arrow Icon.png" alt="join button arrow icon" class="img-fluid" >

                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                        <div class="modal-content">

                            <img src="src\Images\icons\arrow-left-circle.svg" type="button" data-bs-dismiss="modal">

                            <div class="modal-body p-5">

                                <p class="modal-title fw-bolder text-start waiting-list" id="staticBackdropLabel">Join the Waiting List and Secure Your Spot!</p>

                                <p class="text-start">Exciting things are coming, and you don't want to miss out!</p>

                                <form @submit.prevent="submitForm" action="" class="needs-validation">

                                    <select v-model="selectedState" class="form-select col-md-12 mb-3" required>
                                        
                                        <option value="" disabled selected>Select State...</option>
                                        <option value="alabama">alabama</option>
                                        <option value="alaska">alaska</option>
                                        <option value="arizona">arizona</option>
                                        <option value="arkansas">arkansas</option>
                                        <option value="california">california</option>
                                        <option value="colorado">colorado</option>
                                        <option value="connecticut">connecticut</option>
                                        <option value="delaware">delaware</option>
                                        <option value="district of columbia">district of columbia</option>
                                        <option value="florida">florida</option>
                                        <option value="georgia">georgia</option>
                                        <option value="hawaii">hawaii</option>
                                        <option value="idaho">idaho</option>
                                        <option value="illinois">illinois</option>
                                        <option value="indiana">indiana</option>
                                        <option value="iowa">iowa</option>
                                        <option value="kansas">kansas</option>
                                        <option value="kentucky">kentucky</option>
                                        <option value="louisiana">louisiana</option>
                                        <option value="maine">maine</option>
                                        <option value="maryland">maryland</option>
                                        <option value="massachusetts">massachusetts</option>
                                        <option value="michigan">michigan</option>
                                        <option value="minnesota">minnesota</option>
                                        <option value="mississippi">mississippi</option>
                                        <option value="missouri">missouri</option>
                                        <option value="montana">montana</option>
                                        <option value="nebraska">nebraska</option>
                                        <option value="nevada">nevada</option>
                                        <option value="new hampshire">new hampshire</option>
                                        <option value="new jersey">new jersey</option>
                                        <option value="new mexico">new mexico</option>
                                        <option value="new york">new york</option>
                                        <option value="north carolina">north carolina</option>
                                        <option value="north dakota">north dakota</option>
                                        <option value="o2geeks">o2geeks</option>
                                        <option value="ohio">ohio</option>
                                        <option value="oklahoma">oklahoma</option>
                                        <option value="oregon">oregon</option>
                                        <option value="pennsylvania">pennsylvania</option>
                                        <option value="rhode island">rhode island</option>
                                        <option value="south carolina">south carolina</option>
                                        <option value="south dakota">south dakota</option>
                                        <option value="tennessee">tennessee</option>
                                        <option value="texas">texas</option>
                                        <option value="utah">utah</option>
                                        <option value="vermont">vermont</option>
                                        <option value="virginia">virginia</option>
                                        <option value="washington">washington</option>
                                        <option value="west virginia">west virginia</option>
                                        <option value="wisconsin">wisconsin</option>
                                        <option value="wyoming">wyoming</option>

                                    </select>

                                    <select v-model="selectedUniversity" class="form-select col-md-12 mb-3" :disabled="!selectedState" required>
                                        <option value="" disabled selected>Select University...</option>

                                        <optgroup v-if="selectedState">

                                            <option v-for="university in getUniversitiesForSelectedState" :key="university" :value="university">{{ university }}</option>

                                        </optgroup>

                                    </select>

                                    <input type="email" placeholder="Enter .edu email" class="form-control col-md-12 mb-3" required>

                                    <button class="btn btn-success col-md-12 w-100 main-submit" type="submit">

                                        Submit

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
            <img src="src\Images\icons\Mouse.png" alt="scroll mouse" class="img-fluid mouse-icon" onclick="scrollToSectionCover()">

        </div>

        <div class="col-lg-5 flex-column d-flex align-items-center justify-content-center">

            <div class="d-lg-block d-none px-5">

                <div class="d-flex justify-content-center align-items-center rounded-circle outer-1">

                    <div class="main-image position-absolute">

                        <img src="src\Images\PNGs\Mobile logo Style.png" alt="edyou logo" class="img-fluid">
                            
                    </div>

                    <div class="image-1 position-absolute">

                        <img src="src\Images\PNGs\image 22.png" alt="icon 1" class="img-fluid">

                    </div>    

                    <div class="check-image-1 position-absolute">

                        <img src="src\Images\PNGs\check-image-1.png" alt="check icon 1" class="img-fluid">

                    </div>

                    <div class="image-2 position-absolute">

                        <img src="src\Images\PNGs\Group 494.png" alt="icon 2" class="img-fluid">

                    </div>

                    <div class="image-3 position-absolute">

                        <img src="src\Images\PNGs\image 23.png" alt="icon 3" class="img-fluid">

                    </div>

                    <div class="check-image-3 position-absolute">

                        <img src="src\Images\PNGs\check-image-3.png" alt="check icon 3" class="img-fluid">

                    </div>

                    <div class="image-4 position-absolute">

                        <img src="src\Images\PNGs\Rectangle 163.png" alt="icon 4" class="img-fluid">

                    </div>

                    <div class="check-image-4 position-absolute">

                        <img src="src\Images\PNGs\check-image-4.png" alt="check icon 4" class="img-fluid">

                    </div>

                    <div class="image-5 position-absolute">

                        <img src="src\Images\PNGs\Group 497.png" alt="icon 5" class="img-fluid">

                    </div>

                    <div class="image-6 position-absolute">

                        <img src="src\Images\PNGs\Rectangle 168.png" alt="icon 6" class="img-fluid">

                    </div>

                    <div class="check-image-6 position-absolute">

                        <img src="src\Images\PNGs\check-image-6.png" alt="check icon 6" class="img-fluid">

                    </div>

                    <div class="image-7 position-absolute">

                        <img src="src\Images\PNGs\image 21.png" alt="icon 7" class="img-fluid">

                    </div>

                    <div class="check-image-7 position-absolute">

                        <img src="src\Images\PNGs\check-image-7.png" alt="check icon 7" class="img-fluid">

                    </div>

                    <div class="image-8 position-absolute">

                        <img src="src\Images\PNGs\Group 493.png" alt="icon 8" class="img-fluid">

                    </div>

                    <div class="image-9 position-absolute">

                        <img src="src\Images\PNGs\Avatar 16 1.png" alt="icon 9" class="img-fluid">

                    </div>

                    <div class="check-image-9 position-absolute">

                        <img src="src\Images\PNGs\check-image-9.png" alt="check icon 9" class="img-fluid">

                    </div>

                    <div class="image-10 position-absolute">

                        <img src="src\Images\PNGs\Rectangle 169.png" alt="icon 10" class="img-fluid">

                    </div>

                    <div class="check-image-10 position-absolute">

                        <img src="src\Images\PNGs\check-image-10.png" alt="check icon 10" class="img-fluid">

                    </div>

                    <div class="image-11 position-absolute">

                        <img src="src\Images\PNGs\Group 495.png" alt="icon 11" class="img-fluid">

                    </div>

                    <div class="image-12 position-absolute">

                        <img src="src\Images\PNGs\Rectangle 167.png" alt="icon 12" class="img-fluid">

                    </div>

                    <div class="check-image-12 position-absolute">

                        <img src="src\Images\PNGs\check-image-12.png" alt="check icon 12" class="img-fluid">

                    </div>

                    <div class="image-13 position-absolute">

                        <img src="src\Images\PNGs\Rectangle 165.png" alt="icon 13" class="img-fluid">

                    </div>

                    <div class="check-image-13 position-absolute">

                        <img src="src\Images\PNGs\check-image-13.png" alt="check icon 13" class="img-fluid">

                    </div>

                    <div class="line-1 position-absolute"></div>
                    <div class="line-2 position-absolute"></div>
                    <div class="line-3 position-absolute"></div>
                    <div class="line-4 position-absolute"></div>
                    <div class="line-5 position-absolute"></div>
                    <div class="line-6 position-absolute"></div>
                    <div class="line-7 position-absolute"></div>
                    <div class="line-8 position-absolute"></div>
                    <div class="line-9 position-absolute"></div>
                    <div class="line-10 position-absolute"></div>
                    <div class="line-11 position-absolute"></div>
                    <div class="line-12 position-absolute"></div>
                    <div class="line-13 position-absolute"></div>
        
                    <div class="d-flex justify-content-center align-items-center rounded-circle outer-2">
                      
                        <div class="d-flex justify-content-center align-items-center rounded-circle outer-3">
        
                            <div class="d-flex justify-content-center align-items-center rounded-circle outer-4"></div>
        
                        </div>
        
                    </div>    
            
                </div>

            </div>

        </div>

    </div>

  </section>

</template>

<script>
    export default {

        data() {

            return {

                selectedState: '',
                selectedUniversity: '',
                stateUniversityMap: {
                    
                    'alabama':  [
                                    'Delaware State University', 
                                    'Delaware Technical Community College', 
                                    'Goldey-Beacom College', 
                                    'University of Delaware', 
                                    'Wesley College', 
                                    'Wilmington University'
                                ],

                    'alaska':   [
                                    'University of Alaska',
                                    'Alaska Christian College',
                                    'National Park Community College',
                                    'University of Alaska Fairbanks',
                                    'University of Arkansas – Fort Smith'
                                ],

                    'arizona':  [
                                    'University of Arizona',
                                    'Arizona State University',
                                    'Arizona Western College',
                                    'Bryan University',
                                    'Central Arizona College',
                                    'Grand Canyon University',
                                    'Maricopa Community Colleges',
                                    'Mesa Community College',
                                    'Northern Arizona University',
                                    'Northland Pioneer College',
                                    'University of Phoenix',
                                    'Phoenix College',
                                    'Pima Community College',
                                    'Prescott College',
                                    'Rio Salado College',
                                    'South Mountain Community College',
                                    'University of Advancing Technology',
                                    'Yavapai College'
                                ],

                    'arkansas': [
                                    'arkansas northeastern college',
                                    'arkansas state university',
                                    'arkansas tech university',
                                    'central baptist college',
                                    'harding university',
                                    'hendrix college',
                                    'henderson state university',
                                    'john brown university',
                                    'lyon college',
                                    'mid-south community college',
                                    'north arkansas college',
                                    'northwest arkansas community college',
                                    'northwest technical institute',
                                    'ouachita baptist university',
                                    'university of the ozarks',
                                    'phillips community college u of a',
                                    'pulaski technical college',
                                    'southern arkansas university magnolia',
                                    'southeast arkansas college',
                                    'university of arkansas community college batesville',
                                    'university of arkansas at little rock',
                                    'university of arkansas for medical sciences',
                                    'university of arkansas at pine bluff',
                                    'university of arkansas',
                                    'university of central arkansas',
                                    'williams baptist college'
                                ],

                    'california': [
                                    
                                ]   
                },
                email: '',
                isFormValid: false,
            };
        },

        computed: {
            
            getUniversitiesForSelectedState() {
                return this.stateUniversityMap[this.selectedState] || [];
            },
        },

        methods: {

            submitForm() {

                this.$validator.validateAll().then(result => {

                    if (result) {

                        this.isFormValid = true;
                    } 
                    
                    else {

                        this.isFormValid = false;

                    }
                });
            },
        },
    };
</script>