import {create} from 'zustand';

    export const useContact = create((set,get) => ({
        formData: {
            fullName: '',
            email: '',
            serviceType: '',
            projectDetails: '',
        },

    loading: false,
    error: null,
    success: false,

    setFormData: (field, value) => {
            set((state) => {
    const updated = { ...state.formData, [field]: value };
    console.log("Updated Form Data:", updated);
    return { formData: updated };
});

    },
    submitForm: async () => {
        set({loading: true, error: null, success: false});
        try {
            const formData = get().formData;
            const response = await fetch('http://localhost:5000/api/contact/',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            serviceType: formData.serviceType,
            projectDetails: formData.projectDetails,
            }),
            }
        );

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            const result = await response.json();
            console.log("Backend response:", result);
            set({loading: false, success: true});
        } catch (error) {
            set({loading: false, error: error.message});
        }
    },
    resetForm: () => {
        set({
            formData: {
                fullName: '',
                email: '',
                serviceType: '',
                projectDetails: '',
            },
            success: false,
            error: null,
        });
    },
}));
