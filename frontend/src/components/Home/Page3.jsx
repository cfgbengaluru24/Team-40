import React from 'react'
import Footer from '../Footer'

function Page3() {
    return (
        <div className='page3'>
            <div className='left3'>
                <img className="last-img" src="../../public/imgs/1.png" />
            </div>
            <div className='right3'>
                <h1 className='user-title3'>About Us</h1>
                <p className='aboutus-p'>
                    Best Practices Foundation (BPF) is a Bangalore-based NGO founded in 1999, to improve the quality of life for poor and marginalised communities through participatory approaches to co-create innovations that are pro-poor, inclusive and gender sensitive.
                    Our grassroots branch, BPF Dharwad, has been an incubation site for new ideas and innovations aimed at empowering the poor since 2005.

                    Our Market Oriented Value Enhancement (MOVE) innovation is a unique participatory, demand-driven livelihood training model that that been very successful in empowering participants - rural and semi-urban youth, men, women, the landless and illiterate, sexual minorities and stigmatised communities below the poverty line - to break free from poverty and social marginalisation by setting up and sustaining their own entrepreneurial ventures.

                    Our core strength is our research and documentation capacity. We strive to build a strong knowledge base in partnership with government and other institutions by developing innovations, producing toolkits to scale up initiatives, influencing policy, documenting case studies, conducting action research and programme evaluations, and publishing books and compendiums on best practices for sustainable development. We identify gaps and best practices through participatory monitoring and evaluation in the field. We are constantly innovating to engender development initiatives.

                    BPF is a permanent partner of the Huairou Commission's Governance campaign and a research partner of Social Sector Development Strategies, Boston.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Page3
