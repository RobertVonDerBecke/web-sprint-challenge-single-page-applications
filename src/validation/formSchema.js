// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().min(2, "name must be at least 2 characters").required(),
    Mozzarella: yup.boolean(),
    Pepperoni: yup.boolean(),
    Garlic: yup.boolean(),
    Bacon: yup.boolean(),
    Oregano: yup.boolean(),
    Basil: yup.boolean(),
    Onion: yup.boolean(),
    Sausage: yup.boolean(),
    Tomato: yup.boolean(),
    Mushroom: yup.boolean(),
    Olive_oil: yup.boolean(),
    Red_onion: yup.boolean(),
    gluten: yup.boolean(),
    sauce: yup.string().trim().required('Must pick type of Sauce!'),
    size: yup.string().required('Must pick size of Pizza!'),
    special: yup.string().required('Please include special instructions or say none!')

});

export default formSchema;