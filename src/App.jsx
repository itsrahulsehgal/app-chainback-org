import { useState } from 'react'
import './App.css'
import shortAnswer1 from './assets/shortAnswer1.png';
import shortAnswer2 from './assets/shortAnswer2.png';
import shortAnswer3 from './assets/shortAnswer3.png';
import blurBlue from './assets/blur-blue.webp';
import blurRed from './assets/blur-red.webp';
import storageLogo from './assets/storage-logo.svg';
import cloudLogo from './assets/cloud-logo.svg';
import yanaLogo from './assets/yana-logo.svg';
function App() {
  const faqItems = [
    {
      question: 'How does Chainback work?',
      answer: 'Chainback disrupts traditional file storage with a decentralized approach. Files are encrypted, divided, and stored on multiple nodes using IPFS, ensuring constant availability and protection against tampering or deletion. This innovative method guarantees constant accessibility and protects your files from tampering or deletion.',
    },
    {
      question: 'What are the benefits of using Chainback?',
      answer: 'Chainback surpasses traditional file storage solutions, delivering a range of advantages. Experience improved security, reliability, and transparency. Rest assured that your files will always be accessible and safeguarded.',
    },
    {
      question: 'What types of files can I upload?',
      answer: 'Chainback empowers you to securely store and share various types of files, including important documents, legal records, digital assets such as tokens and NFTs, and more. With Advanced File Access, you can take it a step further by uploading files and enabling multiple users to access and sign them through transactions.',
    },
    {
      question: 'Is Chainback secure?',
      answer: 'Absolutely! Chainback prioritizes security at its core. Built on blockchain technology, Chainback ensures files are impervious to tampering or deletion. Every file undergoes encryption and is stored across multiple nodes, providing an unparalleled level of protection. Unauthorized access or modification is virtually impossible, guaranteeing the utmost security for your valuable data.',
    },
    {
      question: 'What is IPFS?',
      answer: 'The InterPlanetary File System (IPFS) is a technology that enables decentralized file storage and sharing across a network of computers. It breaks files into small pieces, encrypts them, and distributes them across multiple computers, ensuring files are always available and cannot be easily altered or deleted.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
<>
  <div className="container-0-2-1">
    <div className="header-0-2-2 header-d0-0-2-6">
      <div className="container-0-2-7 container-d0-0-2-20">
        <div className="logoCircle-0-2-18">
          <svg
            width={270}
            height={49}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="24.337"
              cy="24.5"
              rx="24.337"
              ry="24.317"
              fill="url(#logo_svg__a)"
            />
            <path
              d="m29.147 22.915-4.97-3.745-4.971 2.789v5.578l4.97 2.79 4.97-3.746h8.82v-3.666h-8.82Z"
              fill="#fff"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.483 15.068a29.85 29.85 0 0 1 29.932 0l-1.793 3.089a26.275 26.275 0 0 0-25.456-.494V31.87a26.275 26.275 0 0 0 25.456-.494l1.793 3.089a29.85 29.85 0 0 1-29.932 0 1.785 1.785 0 0 1-.89-1.544V16.612c0-.636.34-1.224.89-1.544Z"
              fill="#fff"
            />
            <path
              d="M76.065 19.125c.938 0 1.876.134 2.814.446.937.313 1.875.804 2.813 1.518l1.787-4.15c-.849-.76-1.92-1.34-3.305-1.786-1.34-.446-2.77-.67-4.243-.67-2.323 0-4.378.492-6.075 1.429a10.008 10.008 0 0 0-3.975 3.972c-.893 1.74-1.385 3.704-1.385 5.98 0 2.276.447 4.284 1.385 6.025.938 1.695 2.278 3.034 3.975 4.016 1.697.937 3.752 1.428 6.075 1.428 1.474 0 2.858-.223 4.243-.67 1.384-.445 2.501-1.026 3.305-1.784l-1.787-4.15c-.938.669-1.876 1.204-2.813 1.517-.939.312-1.877.49-2.814.49-1.787 0-3.127-.58-4.11-1.74-.938-1.16-1.429-2.856-1.429-5.088 0-2.231.491-3.927 1.43-5.043.937-1.16 2.322-1.74 4.109-1.74ZM102.819 23.41h-8.978v-8.614H88.08v22.225h5.762v-9.015h8.978v9.015h5.762V14.796h-5.762v8.613ZM121.846 14.796l-10.407 22.225h5.896l1.965-4.597h9.871l1.965 4.597h5.762l-10.407-22.225h-4.645Zm-.625 13.21 3.037-7.051 3.037 7.051h-6.074ZM145.653 14.796h-5.896v22.225h5.896V14.796ZM165.573 27.337l-10.094-12.54h-4.288V37.02h5.494V24.39l10.094 12.63h4.333V14.796h-5.539v12.54ZM191.658 25.462c1.027-.357 1.876-.937 2.456-1.74.67-.938 1.027-1.964 1.027-3.169 0-1.785-.714-3.169-2.099-4.24-1.384-1.026-3.216-1.561-5.538-1.561h-10.809V37.02h11.077c2.456 0 4.377-.536 5.806-1.651 1.429-1.116 2.144-2.589 2.144-4.418 0-1.429-.402-2.634-1.206-3.57-.625-.893-1.608-1.518-2.858-1.92Zm-9.246-6.248h4.109c1.072 0 1.831.179 2.323.536.536.312.804.892.804 1.651 0 .714-.268 1.25-.76 1.607-.491.357-1.295.49-2.367.49h-4.109v-4.284Zm7.102 12.853c-.492.357-1.296.536-2.412.536h-4.69v-4.686h4.69c1.161 0 1.965.178 2.456.58.492.357.715.937.715 1.785 0 .848-.268 1.428-.759 1.785ZM207.96 14.796l-10.407 22.225h5.896l1.966-4.597h9.87l1.966 4.597h5.762l-10.407-22.225h-4.646Zm-.625 13.21 3.037-7.051 3.038 7.051h-6.075ZM236.189 19.125c.938 0 1.876.134 2.814.446.937.313 1.875.804 2.813 1.518l1.787-4.15c-.849-.76-1.921-1.34-3.305-1.786a13.405 13.405 0 0 0-4.243-.67c-2.323 0-4.378.492-6.075 1.429a10.01 10.01 0 0 0-3.975 3.972c-.893 1.74-1.34 3.704-1.34 5.98 0 2.276.447 4.284 1.385 6.025.938 1.695 2.278 3.034 3.975 4.016 1.697.937 3.752 1.428 6.074 1.428 1.474 0 2.859-.223 4.243-.67 1.385-.445 2.502-1.026 3.306-1.784l-1.787-4.15c-.938.669-1.876 1.204-2.814 1.517-.938.312-1.876.49-2.814.49-1.786 0-3.126-.58-4.109-1.74-.938-1.16-1.429-2.856-1.429-5.088 0-2.231.491-3.927 1.429-5.043.938-1.16 2.323-1.74 4.065-1.74ZM259.817 25.328l9.826-10.532h-6.879l-8.665 9.55v-9.55h-5.851v22.225h5.851V26.935l8.933 10.086H270l-10.183-11.693Z"
              fill="#fff"
            />
            <defs>
              <linearGradient
                id="logo_svg__a"
                x1="2.124"
                y1="48.817"
                x2="52.745"
                y2="48.817"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#46FF7A" />
                <stop offset="0.484" stopColor="#52CBE7" />
                <stop offset={1} stopColor="#7650DC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="container-0-2-21 container-d0-0-2-36 link-0-2-32 md-0-2-23 explorer-0-2-8">
          Explorer
          <div className="linkBorder-0-2-33" />
        </div>
        <div className="container-0-2-21 container-d5-0-2-41 outline-0-2-28 outline-d6-0-2-42 md-0-2-23 uploadFile-0-2-19">
          <div className="border-0-2-34 border-d9-0-2-45">Upload file</div>
        </div>
        <input type="file" className="fileInput-0-2-17" />
        <div className="products-menu-block">
          <div className="products-menu-item">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="products-menu-content">
            <a
              href="https://app.chainback.org/"
              className="products-menu-link-container"
            >
              <span className="products-menu-link-icon">
                <img src={storageLogo} />
              </span>
              <span className="products-menu-link">Chainback Storage</span>
            </a>
            <a
              href="https://cloud.chainback.org/"
              className="products-menu-link-container"
            >
              <span className="products-menu-link-icon">
                <img src={cloudLogo} />
              </span>
              <span className="products-menu-link">Chainback Cloud</span>
            </a>
            <a
              href="https://yanabot.io/"
              className="products-menu-link-container"
            >
              <span className="products-menu-link-icon">
                <img src={yanaLogo}/>
              </span>
              <span className="products-menu-link">Yana AI</span>
            </a>
          </div>
        </div>
        <div className="container-0-2-21 container-d10-0-2-47 reversePrimary-0-2-26 md-0-2-23 container-0-2-46">
          <div className="border-0-2-34 border-d14-0-2-51">Connect Wallet</div>
        </div>
      </div>
    </div>
    <div className="body-0-2-3">
      <div className="container-0-2-52">
        <div className="dropBlock-0-2-55 containerPaddings-0-2-53">
          <input
            multiple=""
            type="file"
            tabIndex={-1}
            style={{ display: "none" }}
          />
          <div className="mainDescription-0-2-88">
            <img
              src={blurRed}
              className="topTextBlurRed-0-2-101"
            />
            <span className="container-0-2-105 container-d0-0-2-106 dropDescription-0-2-56">
              Upload and share files for Free
            </span>
            <div className="dropDescriptionSmall-0-2-57">
              For additional exclusive content access control, select the
              Advanced File Access option
            </div>
          </div>
          <div className="dropZone-0-2-58" role="presentation" tabIndex={0}>
            <img
              src={blurBlue}
              className="dropZoneBlurBlue-0-2-102"
            />
            <div className="container-0-2-21 container-d15-0-2-107 primary-0-2-25 lg-0-2-22 uploadFileButton-0-2-89">
              <div className="border-0-2-34 border-d19-0-2-111">
                <span className="i-icon i-icon-upload">
                  <svg width={24} height={24} viewBox="0 0 48 48" fill="none">
                    <mask
                      id="icon-139c92cf7070702c"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={48}
                      height={48}
                      style={{ maskType: "alpha" }}
                    >
                      <path d="M48 0H0V48H48V0Z" fill="currentColor" />
                    </mask>
                    <g mask="url(#icon-139c92cf7070702c)">
                      <path
                        d="M6 24.0083V42H42V24"
                        stroke="currentColor"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33 15L24 6L15 15"
                        stroke="currentColor"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.9917 32V6"
                        stroke="currentColor"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                &nbsp; Upload file
              </div>
            </div>
            <div className="dropZoneDescription-0-2-59">or drop a file</div>
          </div>
        </div>
        <div className="shortAnswerBlock-0-2-70">
          <div className="shortAnswerHeaderColored-0-2-71">
            <span className="container-0-2-105 container-d1-0-2-112">
              SHORT ANSWER
            </span>
          </div>
          <div className="shortAnswerBlockHeader-0-2-72">How it works?</div>
          <div className="shortAnswerBlockContainer-0-2-73 containerPaddings0-0-2-54">
            <div className="shortAnswerItemBlock-0-2-95">
              <div className="shortAnswerItemDescriptionBlock-0-2-96">
                <div className="shortAnswerItemDescriptionNumberBlock-0-2-100">
                  <div className="container-0-2-113 primary-0-2-114">
                    <div className="border-0-2-115">1</div>
                  </div>
                </div>
                <div className="shortAnswerItemDescriptionBlockHeader-0-2-98">
                  Upload file or drag and drop
                </div>
                <div className="shortAnswerItemDescriptionBlockText-0-2-99">
                  Simply tap the button to select the file you wish to upload,
                  and in return, you'll receive a free link.
                </div>
                <div className="shortAnswerItemDescriptionBlockText-0-2-99">
                  Share the link with others to provide them with authorized
                  access to your file.
                </div>
              </div>
              <div className="shortAnswerItemPictureBlock-0-2-97">
                <img width="700px" src={shortAnswer1} />
              </div>
            </div>
            <div className="shortAnswerItemBlock-0-2-95">
              <div className="shortAnswerItemDescriptionBlock-0-2-96">
                <div className="shortAnswerItemDescriptionNumberBlock-0-2-100">
                  <div className="container-0-2-113 primary-0-2-114">
                    <div className="border-0-2-115">2</div>
                  </div>
                </div>
                <div className="shortAnswerItemDescriptionBlockHeader-0-2-98">
                  Enable Advanced File Access
                </div>
                <div className="shortAnswerItemDescriptionBlockText-0-2-99">
                  You can also choose to enable advanced file access, if you
                  wish to gain full control over who can access your content.
                </div>
                <div className="shortAnswerItemDescriptionBlockText-0-2-99">
                  Click on “Enable Advanced File Access” and fill in a specific
                  wallet, ERC20 token or NFT contract address.
                </div>
              </div>
              <div className="shortAnswerItemPictureBlock-0-2-97">
                <img width="700px" src={shortAnswer2} />
              </div>
            </div>
            <div className="shortAnswerItemBlock-0-2-95">
              <div className="shortAnswerItemDescriptionBlock-0-2-96">
                <div className="shortAnswerItemDescriptionNumberBlock-0-2-100">
                  <div className="container-0-2-113 primary-0-2-114">
                    <div className="border-0-2-115">3</div>
                  </div>
                </div>
                <div className="shortAnswerItemDescriptionBlockHeader-0-2-98">
                  Complete a transaction
                </div>
                <div className="shortAnswerItemDescriptionBlockText-0-2-99">
                  To complete your access control setup, you will need 10,000
                  $Archive tokens.
                </div>
                <div className="shortAnswerItemDescriptionBlockText-0-2-99">
                  If you need to top up $Archive tokens, you can simply purchase
                  them by clicking the “Buy $Archive” button.
                </div>
              </div>
              <div className="shortAnswerItemPictureBlock-0-2-97">
                <img width="700px" src={shortAnswer3} />
              </div>
            </div>
          </div>
        </div>
        <div className="transactionsBlock-0-2-66">
          <div className="transactionsBlockHeaderColored-0-2-67">
            <span className="container-0-2-105 container-d2-0-2-116">
              CHAINBACK EXPLORER
            </span>
          </div>
          <div className="transactionsBlockHeader-0-2-68">
            Chainback Explorer
          </div>
          <div className="chainbackExplorerTexts-0-2-94">
            <img
              src={blurBlue}
              className="transactionsTextBlurBlue-0-2-104"
            />
            <span>
              Chainback Explorer is an indispensable tool alowing users to track
              and monitor all transactions within the Chainback platform.
            </span>
            <span>
              With a focus on transparency and visibility, this tool offers
              insights into crucial activities such as file uploads and
              signatures, enabling users to verify the integrity of their
              documents with ease.
            </span>
          </div>
          <img
            src={blurBlue}
            className="transactionsBlurBlue-0-2-103"
          />
          <div className="transactionsBlockContainer-0-2-69 containerPaddings0-0-2-54">
            <div className="container-0-2-117">
              <div className="container-0-2-122">
                <table className="table-0-2-123">
                  <thead>
                    <tr className="tr-0-2-124">
                      <th
                        className="td-0-2-125 th-0-2-128"
                        style={{ width: 160 }}
                      >
                        <div className="tdBlockHeader-0-2-129 tdBlock-0-2-130">
                          tx Hash
                        </div>
                      </th>
                      <th
                        className="td-0-2-125 th-0-2-128 tdBlockCenter-0-2-132"
                        style={{ width: 165 }}
                      >
                        <div className="tdBlockHeader-0-2-129 tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          Type
                        </div>
                      </th>
                      <th className="td-0-2-125 th-0-2-128">
                        <div className="tdBlockHeader-0-2-129 tdBlock-0-2-130">
                          File Hash
                        </div>
                      </th>
                      <th className="td-0-2-125 th-0-2-128">
                        <div className="tdBlockHeader-0-2-129 tdBlock-0-2-130">
                          From
                        </div>
                      </th>
                      <th
                        className="td-0-2-125 th-0-2-128 tdBlockLeft-0-2-131"
                        style={{ minWidth: 255, maxWidth: 355, width: 355 }}
                      >
                        <div className="tdBlockHeader-0-2-129 tdBlock-0-2-130 tdBlockLeft-0-2-131">
                          Description
                        </div>
                      </th>
                      <th className="td-0-2-125 th-0-2-128 tdBlockCenter-0-2-132">
                        <div className="tdBlockHeader-0-2-129 tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          Signatures
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr-0-2-124">
                      <td
                        className="td-0-2-125 tdLeft-0-2-126"
                        style={{ width: 160 }}
                      >
                        <div className="tdBlock-0-2-130">
                          <div className="hash-0-2-118">19fe8d4b-4edd-4...</div>
                        </div>
                      </td>
                      <td className="td-0-2-125" style={{ width: 165 }}>
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          <div className="container-0-2-150">
                            <div className="border-0-2-151 border-d0-0-2-152">
                              File
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130">
                          <div className="hashContainer-0-2-119">
                            <svg
                              width={24}
                              height={25}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 17.5V16a1.5 1.5 0 1 0-3 0v1.5m-2 0h7v4h-7v-4Z"
                                stroke="url(#private_file_svg__a)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 1.5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a1 1 0 1 0 0-2H5v-18h9v4a1 1 0 0 0 1 1h4V12a1 1 0 1 0 2 0V7.5a.996.996 0 0 0-.26-.672l-4.497-4.997A1 1 0 0 0 15.5 1.5H5Zm11 3.05V6.5h1.755L16 4.55Z"
                                fill="url(#private_file_svg__b)"
                              />
                              <defs>
                                <linearGradient
                                  id="private_file_svg__a"
                                  x1={14}
                                  y1={18}
                                  x2={21}
                                  y2={18}
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#466FFF" />
                                  <stop offset="0.51" stopColor="#7F12F2" />
                                  <stop offset="0.995" stopColor="#7650DC" />
                                </linearGradient>
                                <linearGradient
                                  id="private_file_svg__b"
                                  x1={3}
                                  y1="12.5"
                                  x2={21}
                                  y2="12.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#466FFF" />
                                  <stop offset="0.51" stopColor="#7F12F2" />
                                  <stop offset="0.995" stopColor="#7650DC" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="hash-0-2-118">
                              19fe8d4b-4edd-4...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130 from-0-2-121">
                          <div className="hash-0-2-118">
                            0xa1d955...ed0e7DBc
                          </div>
                        </div>
                      </td>
                      <td
                        className="td-0-2-125"
                        style={{ minWidth: 255, maxWidth: 355, width: 355 }}
                      >
                        <div className="tdBlock-0-2-130 tdBlockLeft-0-2-131 description-0-2-120">
                          Welcome Crypto Frogs
                        </div>
                      </td>
                      <td className="td-0-2-125 tdRight-0-2-127">
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          {" "}
                        </div>
                      </td>
                    </tr>
                    <tr className="tr-0-2-124">
                      <td
                        className="td-0-2-125 tdLeft-0-2-126"
                        style={{ width: 160 }}
                      >
                        <div className="tdBlock-0-2-130">
                          <div className="hash-0-2-118">ba40253a-f041-4...</div>
                        </div>
                      </td>
                      <td className="td-0-2-125" style={{ width: 165 }}>
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          <div className="container-0-2-150">
                            <div className="border-0-2-151 border-d1-0-2-153">
                              File
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130">
                          <div className="hashContainer-0-2-119">
                            <svg
                              width={24}
                              height={25}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 17.5V16a1.5 1.5 0 1 0-3 0v1.5m-2 0h7v4h-7v-4Z"
                                stroke="url(#private_file_svg__a)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 1.5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a1 1 0 1 0 0-2H5v-18h9v4a1 1 0 0 0 1 1h4V12a1 1 0 1 0 2 0V7.5a.996.996 0 0 0-.26-.672l-4.497-4.997A1 1 0 0 0 15.5 1.5H5Zm11 3.05V6.5h1.755L16 4.55Z"
                                fill="url(#private_file_svg__b)"
                              />
                              <defs>
                                <linearGradient
                                  id="private_file_svg__a"
                                  x1={14}
                                  y1={18}
                                  x2={21}
                                  y2={18}
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#466FFF" />
                                  <stop offset="0.51" stopColor="#7F12F2" />
                                  <stop offset="0.995" stopColor="#7650DC" />
                                </linearGradient>
                                <linearGradient
                                  id="private_file_svg__b"
                                  x1={3}
                                  y1="12.5"
                                  x2={21}
                                  y2="12.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#466FFF" />
                                  <stop offset="0.51" stopColor="#7F12F2" />
                                  <stop offset="0.995" stopColor="#7650DC" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="hash-0-2-118">
                              ba40253a-f041-4...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130 from-0-2-121">
                          <div className="hash-0-2-118">
                            0xa1d955...ed0e7DBc
                          </div>
                        </div>
                      </td>
                      <td
                        className="td-0-2-125"
                        style={{ minWidth: 255, maxWidth: 355, width: 355 }}
                      >
                        <div className="tdBlock-0-2-130 tdBlockLeft-0-2-131 description-0-2-120">
                          jashjafsjbfsjads
                        </div>
                      </td>
                      <td className="td-0-2-125 tdRight-0-2-127">
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          {" "}
                        </div>
                      </td>
                    </tr>
                    <tr className="tr-0-2-124">
                      <td
                        className="td-0-2-125 tdLeft-0-2-126"
                        style={{ width: 160 }}
                      >
                        <div className="tdBlock-0-2-130">
                          <div className="hash-0-2-118">aefe02c2-a624-4...</div>
                        </div>
                      </td>
                      <td className="td-0-2-125" style={{ width: 165 }}>
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          <div className="container-0-2-150">
                            <div className="border-0-2-151 border-d2-0-2-154">
                              File
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130">
                          <div className="hashContainer-0-2-119">
                            <svg
                              width={24}
                              height={25}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 17.5V16a1.5 1.5 0 1 0-3 0v1.5m-2 0h7v4h-7v-4Z"
                                stroke="url(#private_file_svg__a)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 1.5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a1 1 0 1 0 0-2H5v-18h9v4a1 1 0 0 0 1 1h4V12a1 1 0 1 0 2 0V7.5a.996.996 0 0 0-.26-.672l-4.497-4.997A1 1 0 0 0 15.5 1.5H5Zm11 3.05V6.5h1.755L16 4.55Z"
                                fill="url(#private_file_svg__b)"
                              />
                              <defs>
                                <linearGradient
                                  id="private_file_svg__a"
                                  x1={14}
                                  y1={18}
                                  x2={21}
                                  y2={18}
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#466FFF" />
                                  <stop offset="0.51" stopColor="#7F12F2" />
                                  <stop offset="0.995" stopColor="#7650DC" />
                                </linearGradient>
                                <linearGradient
                                  id="private_file_svg__b"
                                  x1={3}
                                  y1="12.5"
                                  x2={21}
                                  y2="12.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#466FFF" />
                                  <stop offset="0.51" stopColor="#7F12F2" />
                                  <stop offset="0.995" stopColor="#7650DC" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="hash-0-2-118">
                              aefe02c2-a624-4...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130 from-0-2-121">
                          <div className="hash-0-2-118">
                            0xa1d955...ed0e7DBc
                          </div>
                        </div>
                      </td>
                      <td
                        className="td-0-2-125"
                        style={{ minWidth: 255, maxWidth: 355, width: 355 }}
                      >
                        <div className="tdBlock-0-2-130 tdBlockLeft-0-2-131 description-0-2-120">
                          safjsflsfbj
                        </div>
                      </td>
                      <td className="td-0-2-125 tdRight-0-2-127">
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          {" "}
                        </div>
                      </td>
                    </tr>
                    <tr className="tr-0-2-124">
                      <td
                        className="td-0-2-125 tdLeft-0-2-126"
                        style={{ width: 160 }}
                      >
                        <div className="tdBlock-0-2-130">
                          <div className="hash-0-2-118">9ac51aed-c2ea-4...</div>
                        </div>
                      </td>
                      <td className="td-0-2-125" style={{ width: 165 }}>
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          <div className="container-0-2-150">
                            <div className="border-0-2-151 border-d3-0-2-155">
                              Sign
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130">
                          <div className="hashContainer-0-2-119">
                            <svg
                              width={25}
                              height={25}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#public_file_svg__a)">
                                <path
                                  d="M16.568 21c2.485 0 4.5-3 4.5-3s-2.015-3-4.5-3-4.5 3-4.5 3 2.015 3 4.5 3Z"
                                  stroke="url(#public_file_svg__b)"
                                  strokeWidth={2}
                                  strokeLinejoin="round"
                                />
                                <mask id="public_file_svg__d" fill="#fff">
                                  <path d="M16.568 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                                </mask>
                                <path
                                  d="M16.568 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                  fill="#40FDC8"
                                />
                                <path
                                  d="M16.568 21a3 3 0 0 0 2.122-.879l-2.829-2.828a1 1 0 0 1 .707-.293v4Zm2.122-.879A3 3 0 0 0 19.568 18h-4a1 1 0 0 1 .293-.707l2.829 2.828ZM19.568 18a3 3 0 0 0-.878-2.121l-2.829 2.828a1 1 0 0 1-.293-.707h4Zm-.878-2.121A3 3 0 0 0 16.568 15v4a1 1 0 0 1-.707-.293l2.829-2.828ZM16.568 15a3 3 0 0 0-2.121.879l2.829 2.828a1 1 0 0 1-.708.293v-4Zm-2.121.879A3 3 0 0 0 13.568 18h4a1 1 0 0 1-.293.707l-2.828-2.828ZM13.568 18a3 3 0 0 0 .879 2.121l2.829-2.828a1 1 0 0 1 .292.707h-4Zm.879 2.121a3 3 0 0 0 2.121.879v-4a1 1 0 0 1 .707.293l-2.828 2.828Z"
                                  fill="url(#public_file_svg__c)"
                                  mask="url(#public_file_svg__d)"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.068 1.5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2h-6v-18h9v4a1 1 0 0 0 1 1h4V12a1 1 0 1 0 2 0V7.5a.996.996 0 0 0-.259-.672l-4.497-4.997a1 1 0 0 0-.744-.331h-10.5Zm11 3.05V6.5h1.755l-1.755-1.95Z"
                                  fill="url(#public_file_svg__e)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="public_file_svg__b"
                                  x1="12.671"
                                  y1="19.5"
                                  x2="18.61"
                                  y2="14.357"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#3D8CFA" />
                                  <stop offset={1} stopColor="#40FFC7" />
                                </linearGradient>
                                <linearGradient
                                  id="public_file_svg__c"
                                  x1="15.702"
                                  y1="18.5"
                                  x2="17.434"
                                  y2="17.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#3D8CFA" />
                                  <stop offset={1} stopColor="#40FFC7" />
                                </linearGradient>
                                <linearGradient
                                  id="public_file_svg__e"
                                  x1="4.274"
                                  y1={18}
                                  x2="21.267"
                                  y2="9.973"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#3D8CFA" />
                                  <stop offset={1} stopColor="#40FFC7" />
                                </linearGradient>
                                <clipPath id="public_file_svg__a">
                                  <path
                                    fill="#fff"
                                    transform="translate(.068 .5)"
                                    d="M0 0h24v24H0z"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <div className="hash-0-2-118">
                              28536077-c14d-4...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130 from-0-2-121">
                          <div className="hash-0-2-118">
                            0xab65bd...F670456b
                          </div>
                        </div>
                      </td>
                      <td
                        className="td-0-2-125"
                        style={{ minWidth: 255, maxWidth: 355, width: 355 }}
                      >
                        <div className="tdBlock-0-2-130 tdBlockLeft-0-2-131 description-0-2-120">
                          sde
                        </div>
                      </td>
                      <td className="td-0-2-125 tdRight-0-2-127">
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          {" "}
                        </div>
                      </td>
                    </tr>
                    <tr className="tr-0-2-124">
                      <td
                        className="td-0-2-125 tdLeft-0-2-126"
                        style={{ width: 160 }}
                      >
                        <div className="tdBlock-0-2-130">
                          <div className="hash-0-2-118">28536077-c14d-4...</div>
                        </div>
                      </td>
                      <td className="td-0-2-125" style={{ width: 165 }}>
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          <div className="container-0-2-150">
                            <div className="border-0-2-151 border-d4-0-2-156">
                              File
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130">
                          <div className="hashContainer-0-2-119">
                            <svg
                              width={25}
                              height={25}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#public_file_svg__a)">
                                <path
                                  d="M16.568 21c2.485 0 4.5-3 4.5-3s-2.015-3-4.5-3-4.5 3-4.5 3 2.015 3 4.5 3Z"
                                  stroke="url(#public_file_svg__b)"
                                  strokeWidth={2}
                                  strokeLinejoin="round"
                                />
                                <mask id="public_file_svg__d" fill="#fff">
                                  <path d="M16.568 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                                </mask>
                                <path
                                  d="M16.568 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                  fill="#40FDC8"
                                />
                                <path
                                  d="M16.568 21a3 3 0 0 0 2.122-.879l-2.829-2.828a1 1 0 0 1 .707-.293v4Zm2.122-.879A3 3 0 0 0 19.568 18h-4a1 1 0 0 1 .293-.707l2.829 2.828ZM19.568 18a3 3 0 0 0-.878-2.121l-2.829 2.828a1 1 0 0 1-.293-.707h4Zm-.878-2.121A3 3 0 0 0 16.568 15v4a1 1 0 0 1-.707-.293l2.829-2.828ZM16.568 15a3 3 0 0 0-2.121.879l2.829 2.828a1 1 0 0 1-.708.293v-4Zm-2.121.879A3 3 0 0 0 13.568 18h4a1 1 0 0 1-.293.707l-2.828-2.828ZM13.568 18a3 3 0 0 0 .879 2.121l2.829-2.828a1 1 0 0 1 .292.707h-4Zm.879 2.121a3 3 0 0 0 2.121.879v-4a1 1 0 0 1 .707.293l-2.828 2.828Z"
                                  fill="url(#public_file_svg__c)"
                                  mask="url(#public_file_svg__d)"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.068 1.5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a1 1 0 0 0 0-2h-6v-18h9v4a1 1 0 0 0 1 1h4V12a1 1 0 1 0 2 0V7.5a.996.996 0 0 0-.259-.672l-4.497-4.997a1 1 0 0 0-.744-.331h-10.5Zm11 3.05V6.5h1.755l-1.755-1.95Z"
                                  fill="url(#public_file_svg__e)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="public_file_svg__b"
                                  x1="12.671"
                                  y1="19.5"
                                  x2="18.61"
                                  y2="14.357"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#3D8CFA" />
                                  <stop offset={1} stopColor="#40FFC7" />
                                </linearGradient>
                                <linearGradient
                                  id="public_file_svg__c"
                                  x1="15.702"
                                  y1="18.5"
                                  x2="17.434"
                                  y2="17.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#3D8CFA" />
                                  <stop offset={1} stopColor="#40FFC7" />
                                </linearGradient>
                                <linearGradient
                                  id="public_file_svg__e"
                                  x1="4.274"
                                  y1={18}
                                  x2="21.267"
                                  y2="9.973"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#3D8CFA" />
                                  <stop offset={1} stopColor="#40FFC7" />
                                </linearGradient>
                                <clipPath id="public_file_svg__a">
                                  <path
                                    fill="#fff"
                                    transform="translate(.068 .5)"
                                    d="M0 0h24v24H0z"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <div className="hash-0-2-118">
                              28536077-c14d-4...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="td-0-2-125">
                        <div className="tdBlock-0-2-130 from-0-2-121">
                          <div className="hash-0-2-118">
                            0xab65bd...F670456b
                          </div>
                        </div>
                      </td>
                      <td
                        className="td-0-2-125"
                        style={{ minWidth: 255, maxWidth: 355, width: 355 }}
                      >
                        <div className="tdBlock-0-2-130 tdBlockLeft-0-2-131 description-0-2-120">
                          -
                        </div>
                      </td>
                      <td className="td-0-2-125 tdRight-0-2-127">
                        <div className="tdBlock-0-2-130 tdBlockCenter-0-2-132">
                          1
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="transactionsBlockContainerButtonContainer-0-2-74">
              <div className="container-0-2-21 container-d20-0-2-134 link-0-2-32 md-0-2-23 transactionsBlockContainerButton-0-2-75">
                Go to ChainbackExplorer
                <div className="linkBorder-0-2-33" />
              </div>
            </div>
          </div>
        </div>
        <div className="useCaseBlock-0-2-76">
          <span className="container-0-2-105 container-d3-0-2-139 useCaseHeader-0-2-77">
            USE CASE
          </span>
          <div className="useCaseListHeader-0-2-78">
            What is your Chainback use case?
          </div>
          <div className="questionsBlockContainer-0-2-61">
            <div className="questionBlock-0-2-62">
              <svg
                width={126}
                height={126}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="copy-link_svg__a"
                  maskUnits="userSpaceOnUse"
                  x={7}
                  y={7}
                  width={112}
                  height={112}
                  style={{ maskType: "luminance" }}
                >
                  <path
                    d="M31.5 26.058v-7.683a7.875 7.875 0 0 1 7.875-7.875h68.25a7.872 7.872 0 0 1 7.875 7.875v68.25a7.875 7.875 0 0 1-7.875 7.875h-7.83"
                    stroke="#fff"
                    strokeWidth={6}
                  />
                  <path
                    d="M91.875 26.25h-73.5a7.875 7.875 0 0 0-7.875 7.875v73.5a7.875 7.875 0 0 0 7.875 7.875h73.5a7.875 7.875 0 0 0 7.875-7.875v-73.5a7.875 7.875 0 0 0-7.875-7.875Z"
                    fill="#8B55FF"
                    fillOpacity="0.4"
                    stroke="#fff"
                    strokeWidth={6}
                    strokeLinejoin="round"
                  />
                  <path
                    d="M48.405 60.664 62.297 46.2c3.808-3.809 10.072-3.728 13.986.189 3.913 3.914 3.997 10.177.189 13.986l-5.014 5.31m-36.11 9.776a483.982 483.982 0 0 1-4.108 4.016c-3.811 3.809-3.916 10.6 0 14.516 3.911 3.912 10.175 3.998 13.986.187l13.556-12.306"
                    stroke="#fff"
                    strokeWidth={6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M48.99 74.361a10.14 10.14 0 0 1-2.969-6.492 9.621 9.621 0 0 1 2.783-7.494m9.789 7.51c3.913 3.914 3.997 10.177.189 13.989"
                    stroke="#fff"
                    strokeWidth={6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </mask>
                <g mask="url(#copy-link_svg__a)">
                  <path d="M0 0h126v126H0V0Z" fill="#52CBE7" />
                </g>
              </svg>
              <div className="questionText-0-2-65">
                File Sharing by Leveraging IPFS
              </div>
            </div>
            <div className="questionBlock-0-2-62">
              <svg
                width={126}
                height={127}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#sign-ok_svg__a)">
                  <mask
                    id="sign-ok_svg__b"
                    maskUnits="userSpaceOnUse"
                    x={7}
                    y={22}
                    width={112}
                    height={80}
                    style={{ maskType: "luminance" }}
                  >
                    <path
                      d="m89.25 25.303 21 21m0-21-21 21m26.25 31.5-18.375 21-10.5-10.5"
                      stroke="#fff"
                      strokeWidth={6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M68.25 25.303H10.5v21h57.75v-21Zm0 52.5H10.5v21h57.75v-21Z"
                      fill="#555"
                      stroke="#fff"
                      strokeWidth={6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                  <g mask="url(#sign-ok_svg__b)">
                    <path d="M0-.947h126v126H0v-126Z" fill="#52CBE7" />
                  </g>
                </g>
                <defs>
                  <clipPath id="sign-ok_svg__a">
                    <path
                      fill="#fff"
                      transform="translate(0 .853)"
                      d="M0 0h126v126H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="questionText-0-2-65">
                Advanced File Access Feature
              </div>
            </div>
            <div className="questionBlock-0-2-62">
              <svg
                width={127}
                height={127}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#paid-features_svg__a)">
                  <mask
                    id="paid-features_svg__b"
                    maskUnits="userSpaceOnUse"
                    x={18}
                    y={6}
                    width={91}
                    height={112}
                    style={{ maskType: "luminance" }}
                  >
                    <path
                      d="M26.584 114.553h73.499a5.25 5.25 0 0 0 5.25-5.25v-73.5h-26.25V9.553h-52.5a5.25 5.25 0 0 0-5.25 5.25v94.5a5.25 5.25 0 0 0 5.25 5.25Z"
                      fill="#555"
                      stroke="#fff"
                      strokeWidth={6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="m79.084 9.553 26.249 26.25"
                      stroke="#fff"
                      strokeWidth={6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m55.459 90.928 26.25-26.25-10.5-10.5-26.25 26.25v10.5h10.5Z"
                      fill="#52CBE7"
                      stroke="#fff"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                  <g mask="url(#paid-features_svg__b)">
                    <path d="M.333-.947h126v126h-126v-126Z" fill="#52CBE7" />
                  </g>
                </g>
                <defs>
                  <clipPath id="paid-features_svg__a">
                    <path
                      fill="#fff"
                      transform="translate(.333 .853)"
                      d="M0 0h126v126H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="questionText-0-2-65">
                Chainback Paid Signatures
              </div>
            </div>
          </div>
        </div>
        <div className="faqBlock-0-2-79 containerPaddings0-0-2-54">
        <span className="container-0-2-105 container-d4-0-2-140 faqHeader-0-2-80">
            FAQ
          </span>
          <div className="faqListHeader-0-2-81">What is Chainback?</div>
          <div className="faqListText-0-2-82">
            Chainback is a decentralized web3 file distributing platform that
            leverages blockchain technology to safeguard files from tampering or
            deletion, providing enhanced security and reliability.
          </div>
          <div className="faqListItems-0-2-83">

      {faqItems.map((item, index) => (
        <div key={index} className="faqListItem-0-2-84">
          <div className="faqListItemHeader-0-2-85" onClick={() => toggleAccordion(index)}>
            <div>{item.question}</div>
            <span className="i-icon i-icon-add-one icon-0-2-87">
              <svg width={24} height={24} viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeLinejoin="round"
                />
                <path
                  d="M24 16V32"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24L32 24"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {openIndex === index && (
            <div className="faqListText-0-2-82">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
    </div>


        
      </div>
    </div>
    <div className="footer-0-2-4">
      <div className="container-0-2-141">
        <svg
          width={202}
          height={120}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-0-2-148"
        >
          <ellipse
            cx="100.768"
            cy="36.877"
            rx="36.529"
            ry="36.025"
            fill="url(#logo-vertical_svg__a)"
          />
          <path
            d="m107.987 34.53-7.46-5.55-7.46 4.133v8.264l7.46 4.133 7.46-5.55h13.236v-5.43h-13.236Z"
            fill="#fff"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.972 22.905c13.892-7.946 31.034-7.946 44.926 0l-2.691 4.575c-11.786-6.741-26.23-6.985-38.208-.73v21.044c11.978 6.255 26.422 6.011 38.208-.73l2.691 4.575c-13.892 7.946-31.034 7.946-44.926 0a2.638 2.638 0 0 1-1.336-2.288V25.194c0-.943.509-1.815 1.336-2.288Z"
            fill="#fff"
          />
          <g clipPath="url(#logo-vertical_svg__b)" fill="#fff">
            <path d="M11.524 102.088c.92 0 1.84.13 2.76.432.92.303 1.84.778 2.76 1.469l1.753-4.019c-.832-.734-1.884-1.296-3.242-1.728a13.309 13.309 0 0 0-4.163-.648c-2.278 0-4.294.475-5.96 1.383a9.757 9.757 0 0 0-3.899 3.846c-.876 1.685-1.358 3.586-1.358 5.79s.438 4.149 1.358 5.834c.92 1.642 2.235 2.939 3.9 3.889 1.665.908 3.68 1.383 5.96 1.383 1.445 0 2.803-.216 4.162-.648 1.358-.432 2.454-.994 3.242-1.728l-1.752-4.019c-.92.648-1.84 1.166-2.76 1.469-.921.302-1.841.475-2.761.475-1.753 0-3.068-.561-4.032-1.685-.92-1.124-1.402-2.766-1.402-4.926 0-2.161.482-3.803 1.402-4.884.92-1.123 2.279-1.685 4.032-1.685ZM37.77 106.235h-8.807v-8.34h-5.652v21.52h5.652v-8.729h8.807v8.729h5.653v-21.52H37.77v8.34ZM56.437 97.894l-10.21 21.521h5.785l1.928-4.451h9.683l1.928 4.451h5.653l-10.21-21.52h-4.557Zm-.613 12.792 2.98-6.828 2.979 6.828h-5.96ZM79.792 97.894h-5.784v21.521h5.784v-21.52ZM99.335 110.038l-9.903-12.144h-4.206v21.521h5.39v-12.229l9.902 12.229h4.25v-21.52h-5.433v12.143ZM124.924 108.223c1.008-.346 1.84-.908 2.41-1.685.657-.908 1.008-1.902 1.008-3.069 0-1.728-.701-3.068-2.06-4.105-1.358-.994-3.154-1.512-5.433-1.512h-10.604v21.563h10.867c2.41 0 4.294-.518 5.696-1.599 1.402-1.08 2.103-2.506 2.103-4.278 0-1.383-.394-2.549-1.183-3.457-.613-.864-1.577-1.469-2.804-1.858Zm-9.07-6.05h4.031c1.052 0 1.797.173 2.279.519.525.302.788.864.788 1.598 0 .692-.263 1.21-.745 1.556-.482.346-1.27.476-2.322.476h-4.031v-4.149Zm6.967 12.446c-.482.345-1.271.518-2.366.518h-4.601V110.6h4.601c1.139 0 1.928.173 2.41.561.482.346.701.908.701 1.729 0 .821-.263 1.383-.745 1.729ZM140.918 97.894l-10.21 21.521h5.784l1.928-4.451h9.684l1.928 4.451h5.652l-10.209-21.52h-4.557Zm-.614 12.792 2.98-6.828 2.979 6.828h-5.959ZM168.611 102.088c.92 0 1.84.13 2.76.432.92.303 1.841.778 2.761 1.469l1.752-4.019c-.832-.734-1.884-1.296-3.242-1.728a13.313 13.313 0 0 0-4.163-.648c-2.278 0-4.294.475-5.959 1.383a9.757 9.757 0 0 0-3.9 3.846c-.876 1.685-1.314 3.586-1.314 5.79s.438 4.149 1.358 5.834c.92 1.642 2.235 2.939 3.9 3.889 1.665.908 3.68 1.383 5.959 1.383 1.446 0 2.804-.216 4.163-.648 1.358-.432 2.454-.994 3.242-1.728l-1.752-4.019c-.921.648-1.841 1.166-2.761 1.469-.92.302-1.84.475-2.761.475-1.752 0-3.067-.561-4.031-1.685-.92-1.124-1.402-2.766-1.402-4.926 0-2.161.482-3.803 1.402-4.884.92-1.123 2.279-1.685 3.988-1.685ZM191.79 108.093l9.64-10.199h-6.748l-8.5 9.248v-9.248h-5.741v21.521h5.741v-9.766l8.763 9.766h6.836l-9.991-11.322Z"></path>
          </g>
          <defs>
            <linearGradient
              id="logo-vertical_svg__a"
              x1="67.427"
              y1="72.902"
              x2="143.407"
              y2="72.902"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#46FF7A" />
              <stop offset="0.484" stopColor="#52CBE7" />
              <stop offset={1} stopColor="#7650DC" />
            </linearGradient>
            <clipPath id="logo-vertical_svg__b">
              <path
                fill="#fff"
                transform="translate(0 97.379)"
                d="M0 0h202v22.471H0z"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="manyThings-0-2-149">
          Many things that have no value for us today will be a sacred relic of
          information for future generations
        </div>
        <div className="networks-0-2-142">
          <svg
            width={70}
            height={71}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-0-2-147"
          >
            <g clipPath="url(#medium_svg__a)">
              <path
                d="M39.484 35.852c0 10.872-8.837 19.687-19.744 19.687A19.715 19.715 0 0 1 0 35.852c0-10.877 8.838-19.688 19.74-19.688a19.714 19.714 0 0 1 19.744 19.688Zm21.657 0c0 10.237-4.42 18.532-9.87 18.532-5.452 0-9.87-8.3-9.87-18.532 0-10.238 4.418-18.533 9.87-18.533 5.45 0 9.87 8.3 9.87 18.533Zm8.859 0c0 9.17-1.553 16.603-3.474 16.603-1.916 0-3.47-7.438-3.47-16.603 0-9.17 1.554-16.603 3.475-16.603 1.916 0 3.469 7.433 3.469 16.603Z"
                fill="#863FFE"
              />
            </g>
            <defs>
              <clipPath id="medium_svg__a">
                <path
                  fill="#fff"
                  transform="translate(0 .852)"
                  d="M0 0h70v70H0z"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width={70}
            height={71}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-0-2-147"
          >
            <g clipPath="url(#twitter_svg__a)">
              <path
                d="M21.989 66.476c26.416 0 40.867-21.888 40.867-40.837 0-.612 0-1.233-.027-1.846A29.245 29.245 0 0 0 70 16.347a29.128 29.128 0 0 1-8.264 2.266 14.441 14.441 0 0 0 6.33-7.95 28.581 28.581 0 0 1-9.13 3.47 14.376 14.376 0 0 0-24.483 13.099A40.797 40.797 0 0 1 4.847 12.23a14.39 14.39 0 0 0 4.454 19.171A14.537 14.537 0 0 1 2.8 29.616v.197a14.385 14.385 0 0 0 11.515 14.079c-1.233.34-2.506.509-3.784.503-.902.003-1.801-.08-2.687-.25a14.363 14.363 0 0 0 13.418 9.963 28.823 28.823 0 0 1-17.85 6.155c-1.14.005-2.28-.06-3.412-.197a40.88 40.88 0 0 0 21.989 6.41Z"
                fill="#863FFE"
              />
            </g>
            <defs>
              <clipPath id="twitter_svg__a">
                <path
                  fill="#fff"
                  transform="translate(0 .852)"
                  d="M0 0h70v70H0z"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width={70}
            height={71}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-0-2-147"
          >
            <g clipPath="url(#telegram_svg__a)">
              <g clipPath="url(#telegram_svg__b)">
                <path
                  d="M70 35.852a35 35 0 1 1-70 0 35 35 0 0 1 70 0ZM36.256 26.69c-3.404 1.418-10.212 4.35-20.414 8.794-1.654.656-2.524 1.304-2.603 1.934-.132 1.063 1.203 1.483 3.018 2.056l.766.24c1.785.583 4.191 1.26 5.438 1.287 1.138.026 2.402-.438 3.798-1.4 9.533-6.436 14.455-9.686 14.761-9.756.219-.053.525-.114.726.07.206.18.184.525.162.617-.131.564-5.368 5.429-8.076 7.949-.845.787-1.444 1.343-1.566 1.47-.27.276-.544.547-.823.814-1.662 1.6-2.905 2.8.066 4.76 1.43.945 2.577 1.72 3.718 2.498 1.243.849 2.486 1.693 4.096 2.752.406.262.8.547 1.18.818 1.449 1.032 2.757 1.96 4.363 1.811.936-.087 1.903-.962 2.393-3.587 1.16-6.2 3.438-19.627 3.963-25.161.032-.46.014-.922-.056-1.378a1.475 1.475 0 0 0-.5-.95 2.301 2.301 0 0 0-1.355-.406c-1.313.021-3.339.726-13.055 4.768Z"
                  fill="#863FFE"
                />
              </g>
            </g>
            <defs>
              <clipPath id="telegram_svg__a">
                <path
                  fill="#fff"
                  transform="translate(0 .852)"
                  d="M0 0h70v70H0z"
                />
              </clipPath>
              <clipPath id="telegram_svg__b">
                <path
                  fill="#fff"
                  transform="translate(0 .852)"
                  d="M0 0h70v70H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="footer-0-2-143">
          <div className="footerLine-0-2-145" />© 2023
          <a className="copyright-0-2-144">Chainback Web3 Archive</a>
          <div className="links-0-2-146">
            <div>
              <a href="mailto:partners@chainback.org">partners@chainback.org</a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1wtzmijhSoJJmIO5S2PRDH3-rV3IH93xv/view"
                target="_blank"
                rel="noreferrer"
              >
                Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default App
