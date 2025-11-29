import React from 'react';

// --- Configuration Constants (Hex Values) ---
// Define hex values based on the original Tailwind config to use with arbitrary values
const primaryHex = "#137fec";
const bgLightHex = "#f6f7f8";
const bgDarkHex = "#101922";

// --- Reusable Components/Icons ---

const LogoIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.92 11.23a1 1 0 0 0-.92-.73H13V2a1 1 0 0 0-2 0v8.5H2a1 1 0 0 0-.92.73 1 1 0 0 0 .23.99l10 10.77a1 1 0 0 0 1.38 0l10-10.77a1 1 0 0 0 .23-.99Z"></path>
    </svg>
);

const LandingPage = () => {
    
    // Inline style for Material Symbols if not configured in global CSS
    const iconStyle = {
        fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
    };

    return (
        <div className={`relative flex h-auto min-h-screen w-full flex-col bg-[${bgLightHex}] dark:bg-[${bgDarkHex}] group/design-root overflow-x-hidden font-display`}>
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
                        
                        
                        {/* HeroSection */}
                        <div className="py-10 sm:py-20">
                            <div className="@container">
                                <div className="flex flex-col gap-10 px-4 py-10 @[480px]:gap-12 @[864px]:flex-row-reverse @[864px]:items-center">
                                    <div 
                                        className="w-full bg-center bg-no-repeat aspect-square sm:aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full" 
                                        data-alt="Stylized image of a professional resume with abstract design elements." 
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBn06_h6hbqZb0TwhG7Pnp3FDqbu7oPJz-A4tzj9gX9DJQrfwz1rJHToZePjkl28Ip6R54jgQI_MFFaxomr7gMgnJbqZYE_YJavW56PBz1tPlAPBBsGScDERCYwtiMfvbtrX8GiHLuGC7SRz_-mYBbwdIcGjIgTAMq98ca6ZLG8XbVCgkC45HAzusc4ucwfbUetwsJ8lez4iVjoU76LqpHN4ZyvfIZkfWC7EYkDKaChLUoLtsqJO7T7jpuc7IJWD8W9iM8zosy4mpZT")' }}
                                    ></div>
                                    <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                                        <div className="flex flex-col gap-4 text-left">
                                            <h1 className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Craft a Professional CV in Minutes</h1>
                                            <h2 className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">Stand out from the crowd with our easy-to-use builder and stunning, recruiter-approved templates.</h2>
                                        </div>
                                        {/* FIX: Replaced bg-primary with bg-[#137fec] */}
                                        <button className={`flex w-full sm:w-fit min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 @[480px]:h-14 @[480px]:px-6 bg-[${primaryHex}] text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]`}>
                                            <span className="truncate">Create Your Professional CV Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* FeatureSection */}
                        <div className="py-10 sm:py-20">
                            <div className="flex flex-col gap-12 px-4 py-10 @container">
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h2 className="text-slate-900 dark:text-slate-50 tracking-light text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Key Features to Help You Succeed</h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-[720px] @[480px]:text-lg">Our CV maker is packed with features to make your job application process seamless and effective.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0">
                                    
                                    {/* Feature 1 */}
                                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 flex-col">
                                        <div className={`text-[${primaryHex}]`} data-icon="DesignServices" data-size="32px" data-weight="regular">
                                            <span className="material-symbols-outlined" style={{...iconStyle, fontSize: '32px'}}>design_services</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight">Easy-to-use Templates</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">Choose from a variety of professionally designed templates to match your style and industry.</p>
                                        </div>
                                    </div>
                                    
                                    {/* Feature 2 */}
                                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 flex-col">
                                        <div className={`text-[${primaryHex}]`} data-icon="Tune" data-size="32px" data-weight="regular">
                                            <span className="material-symbols-outlined" style={{...iconStyle, fontSize: '32px'}}>tune</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight">Customizable Sections</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">Easily add, remove, and reorder sections to tailor your CV for any job application.</p>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 flex-col">
                                        <div className={`text-[${primaryHex}]`} data-icon="FileDownload" data-size="32px" data-weight="regular">
                                            <span className="material-symbols-outlined" style={{...iconStyle, fontSize: '32px'}}>download</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight">Download in PDF</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">Export your finished CV in a high-quality, universally accepted PDF format, ready to send.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Template Showcase Section */}
                        <div className="py-10 sm:py-20">
                            {/* SectionHeader */}
                            <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5 text-center">Choose Your Template</h2>
                            {/* Carousel */}
                            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                <div className="flex items-stretch p-4 gap-6">
                                    {/* Template 1: Modern */}
                                    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-64">
                                        <div 
                                            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col border border-slate-200 dark:border-slate-800" 
                                            data-alt="A modern and sleek CV template with a two-column layout." 
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4so7Ayfli-p36UqjfZpPQMEDHFEerTtAkh3b0bQBgNQYvzbitaIxKrVv2N_mp4d07e8QoKc1qWC5EiqyjYCFzGloGmAe3kq6zv_qbQbF5KMeWzugXch4HCI1asEu8QrtxDzsbg53tuGqFTsX7QK7OR6ZkMSdm-U-Cv53lZw5_egJZVZrN2SAnxiS97N4iiouBwUd3lLbO9NdMlZM21oJq76jqcA2ff39R1tSeUpG9s7vd9fw3dn9mYNDjNo7GBHCVtN7aC3mDZzq1")' }}
                                        ></div>
                                        <div>
                                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium leading-normal">Modern</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">A sleek, contemporary design.</p>
                                        </div>
                                    </div>
                                    
                                    {/* Template 2: Classic */}
                                    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-64">
                                        <div 
                                            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col border border-slate-200 dark:border-slate-800" 
                                            data-alt="A classic and timeless CV template with a traditional single-column layout." 
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3ptYLVGr-9bEEwQE4gwk-GiYXquPduWEh7MYBDnnqdsQ7Df33J-IcMsSna-33OsmgivLvxvvr_0denYQqBFKlnakqYBOkzTMhCyexTCykOsHzRvQPehpfOr1vO3oO7uhMJwDydt2v1BdFBONy12GqwPAKSWrL68e-_FixUiJZ1ThkFrOQAuIk-rCDSWNbdIexMzZnmPV8Z0aUhjD6YmrUsc6SA97ZHlVZwr4IxmUrYbRvIjXVbYjr3kul4FmMGIVq47iRwT10thPQ")' }}
                                        ></div>
                                        <div>
                                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium leading-normal">Classic</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">A timeless, traditional layout.</p>
                                        </div>
                                    </div>
                                    
                                    {/* Template 3: Creative */}
                                    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-64">
                                        <div 
                                            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col border border-slate-200 dark:border-slate-800" 
                                            data-alt="A creative CV template with bold typography and a unique layout for creative professionals." 
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByNak72KW_FCbMUbJwUKG3AQkmq2kKtFw4DBBI4vo07FRFBRJSbLcn4YVAugo9TEoDKTft0OTAgUOd7eadRJI_gel22aXXTd9GdU3mbCmQoF20mx90A2HaleKwn8EhIfyEUWOA4Vth6-14M6OtaK1fQDUDRVpYi-iAwd3vPxhQeeKkdpr9SXmws7QNSqwIgvlST2R1ChofVQCTsPzWC-A7UgnYNyTcx5DxcvuggGv4l3KxETmhFAr_5yboq2lsnHwqgTjU1CiI10KV")' }}
                                        ></div>
                                        <div>
                                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium leading-normal">Creative</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">A bold design for creative fields.</p>
                                        </div>
                                    </div>
                                    
                                    {/* Template 4: Minimalist */}
                                    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-64">
                                        <div 
                                            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col border border-slate-200 dark:border-slate-800" 
                                            data-alt="A minimalist CV template with a clean, simple format and ample white space." 
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD397-Bzg_qpebeqi9FFy1Mx1AA930l_rCjtin_TQPDD297Bc2cKBTB3W1vReB-OGZPabb9iYmPud0TGBaIj8ZIfZ83gOCaypGnNplb-k6BuV7w2rmOQ5ipXENbT7jMtVlbQfhcRbSaMnq4_KGIWli2ThRZ42yCCoxRvdz-xO0p9t_YWT3IR9wqILu5ciDERJyzv0IPntdFUGJQSbOe7Y8Abamu4TOmWtjAJP0LVos0aK76ofc_nXjqi1iOWKruOIaO60mAalOiiqX")' }}
                                        ></div>
                                        <div>
                                            <p className="text-slate-900 dark:text-slate-50 text-base font-medium leading-normal">Minimalist</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">A clean, simple format.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Final CTA Section */}
                        <div className="py-10 sm:py-20 px-4">
                            {/* FIX: Replaced bg-primary/10 and dark:bg-primary/20 with hex values */}
                            <div className={`rounded-xl bg-[${primaryHex}]/10 dark:bg-[${primaryHex}]/20 p-8 sm:p-16 text-center`}>
                                <div className="flex flex-col gap-6 items-center">
                                    <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl">Ready to Land Your Dream Job?</h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">Start building a professional CV that gets noticed. Join thousands of successful job seekers and create your standout CV today.</p>
                                    {/* FIX: Replaced bg-primary with bg-[#137fec] */}
                                    <button className={`flex min-w-[84px] w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 sm:h-14 sm:px-8 bg-[${primaryHex}] text-white text-base font-bold leading-normal tracking-[0.015em] sm:text-lg`}>
                                        <span className="truncate">Get Started for Free</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;