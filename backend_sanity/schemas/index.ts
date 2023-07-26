import testimonials from './testimonials'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'
import works from './works'

// Add the "testimonials" schema to the schemaTypes array
export const schemaTypes = [
  works,
  testimonials,
  brands,
  abouts,
  skills,
  workExperience,
  experiences,
  contact,
]

// If you have other schemas, you can add them here as well
// For example:
// import someOtherSchema from './someOtherSchema';
// export const schemaTypes = [testimonials, someOtherSchema];
