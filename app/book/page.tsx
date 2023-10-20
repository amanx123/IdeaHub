'use client'
import { ChangeEvent, useState } from 'react'
type FormData = {
    interests: string[];
    ageGroup: string;
    readingLevel: string;
    recommendationType: string;
};
function Book() {
    const initialFormData: FormData = {
        interests: [],
        ageGroup: 'Adult',
        readingLevel: 'Intermediate',
        recommendationType: 'Personalized',
    };
    const [formData, setFormData] = useState<FormData>(initialFormData);


    const handleInterestsChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedInterests = Array.from(e.target.selectedOptions, option => option.value);
        setFormData({
            ...formData,
            interests: selectedInterests,
        })
    }
    const handleInputChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className='flex items-center justify-center h-screen text-black'>
            <form onSubmit={handleSubmit} className='space-x-5'>
                <label className='text-white'>Interests</label>
                <select name="Interests" multiple={true} value={formData.interests} onChange={handleInterestsChange}>
                    <option value="Self Help">Self Help</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Technology">Technology</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Biography">Biography</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Historical">Historical</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance Novel">Romance Novel</option>
                </select>
                <label className='text-white'>Age Group</label>
                <select name="AgeGroup" value={formData.ageGroup} onChange={handleInputChange}>
                    <option value="Adult">Adult</option>
                    <option value="Teen">Teen</option>
                    <option value="Child">Child</option>
                </select>

                <label className='text-white'>Reading Level</label>
                <select name="ReadingLevel" value={formData.readingLevel} onChange={handleInputChange}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <label className='text-white'>Recommendation Type</label>
                <select name="RecommendationType" value={formData.recommendationType} onChange={handleInputChange}>
                    <option value="Personalized">Personalized</option>
                    <option value="Top Picks">Top Picks</option>
                    <option value="New Releases">New Releases</option>
                    <option value="Classics">Classics</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Book
