export function getSavedArticles() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        abstract:
          "An azobenzene-derived photoswitch has been covalently cross-linked to two sites of the S-peptide in the RNase S complex in a manner that the alpha-helical content of the S-peptide reduces upon cis-to-trans isomerization of the photoswitch. Three complementary experimental techniques have been employed, isothermal titration calorimetry, circular dichroism spectroscopy and intrinsic tyrosine fluorescence quenching, to determine the binding affinity of the S-peptide to the S-protein in the two states of the photoswitch. Five mutants with the photoswitch attached to different sites of the S-peptide have been explored, with the goal to maximize the change in binding affinity upon photoswitching, and to identify the mechanisms that determine the binding affinity. With regard to the first goal, one mutant has been identified, which binds with reasonable affinity in the one state of the photoswitch, while specific binding is completely switched off in the other state. With regard to the second goal, accompanying molecular dynamics simulations combined with a quantitative structure activity relationship revealed that the alpha-helicity of the S-peptide in the binding pocket correlates surprisingly well with measured dissociation constants. Moreover, the simulations show that both configurations of all S-peptides exhibit quite well-defined structures, even in apparently disordered states",
        authors:
          "Bozovic, Olga; Gulzar, Adnan; Hamm, Peter; Jankovic, Brankica; Stock, Gerhard; Wolf, Steffen; Zanobini, Claudio",
        createdDate: "03 16, 2020",
        doi: "10.1021/jacs.9b03222",
        downloadUrl: "https://www.zora.uzh.ch/id/eprint/183164/1/preprint.pdf",
        id: 127853087,
        title:
          "Photocontrolling Protein–Peptide Interactions: From Minimal Perturbation to Complete Unbinding",
        // ...etc, whatever properties it's supposed to have
      },
      {
        abstract:
          "We encapsulate a fluorescent donor molecule and a photochromic acceptor unit (photoswitch) in polymer micelles and show that the color of the emitted fluorescence is continuously changed from blue to yellow upon light-induced isomerization of the acceptor. Interestingly, white-light generation is achieved in between. With the photoswitch in the colorless form, intense blue emission from the donor is observed, while UV-induced isomerization to the colored form induces an energy transfer reaction that quenches the donor emission and sensitizes the yellow emission from the colored photoswitch. The process is reversed by exposure to visible light, triggering isomerization to the colorless form",
        authors:
          "Andréasson, Joakim; Bälter, Magnus Å.; Guirado, Gonzalo; Hernando, Jordi; Irie, Masahiro; Li, Shiming; Morimoto, Masakazu; Raymo, Françisco M.; Tang, Sicheng",
        createdDate: "11 19, 2016",
        doi: "10.1039/c6sc01623e",
        downloadUrl: "https://core.ac.uk/download/pdf/70617947.pdf",
        id: 36794992,
        title:
          "Emission color tuning and white-light generation based on photochromic control of energy transfer reactions in polymer micelles",
      },
      {
        abstract:
          "YesHere we present an in-depth analysis of structural factors that modulate peptide-capped nanoparticle\r\ncatalytic activity via optically driven structural reconfiguration of the biointerface present at the particle surface.\r\nSix different sets of peptide-capped Au nanoparticles were prepared, in which an azobenzene photoswitch was incorporated\r\ninto one of two well-studied peptide sequences with known affinity for Au, each at one of three different\r\npositions: The N- or C-terminus, or mid-sequence. Changes in the photoswitch isomerization state induce a reversible\r\nstructural change in the surface-bound peptide, which modulates the catalytic activity of the material. This\r\ncontrol of reactivity is attributed to changes in the amount of accessible metallic surface area available to drive the\r\nreaction. This research specifically focuses on the effect of the peptide sequence and photoswitch position in the\r\nbiomolecule, from which potential target systems for on/off reactivity have been identified. Additionally, trends\r\nassociated with photoswitch position for a peptide sequence (Pd4) have been identified. Integrating the azobenzene\r\nat the N-terminus or central region results in nanocatalysts with greater reactivity in the trans and cis conformations,\r\nrespectively; however, positioning the photoswitch at the C-terminus gives rise to a unique system that is\r\nreactive in the trans conformation and partially deactivated in the cis conformation. These results provide a fundamental\r\nbasis for new directions in nanoparticle catalyst development to control activity in real time, which could\r\nhave significant implications in the design of catalysts for multistep reactions using a single catalyst. Additionally,\r\nsuch a fine level of interfacial structural control could prove to be important for applications beyond catalysis, including\r\nbiosensing, photonics, and energy technologies that are highly dependent on particle surface structures.Air Office of Scientific Research, grant number FA9550-12- 1-0226",
        authors:
          "Cendan, V.J.; Hughes, Zak E.; Knecht, M.R.; Lawrence, R.L.; Lim, C.K.; Liu, Y.; Prasad, P.N.; Swihart, M.T.; Walsh, T.R.",
        createdDate: "01 02, 2019",
        doi: "10.1021/acsami.8b10582",
        downloadUrl: "https://core.ac.uk/download/161874994.pdf",
        id: 8490163,
        title:
          "Optical control of nanoparticle catalysis influenced by photoswitch positioning in hybrid peptide capping ligands",
      },
      {
        abstract:
          "Synthesis and evaluation of novel photochromic glycoconjugates and glycomacrocycles based on the azobenzene photoswitch",
        authors: "Berry, Jonathan",
        createdDate: "10 25, 2023",
        doi: null,
        downloadUrl: "https://core.ac.uk/download/588479645.pdf",
        id: 154019193,
        title:
          "From azobenzene glycosylation to multistate photoswitching: new approaches for the synthesis of  photochromic glycoconjugates and glycomacrocycles",
      },
      // and have however many you want to show on the saved-news page
    ])
  );
}

export function saveArticle(article) {
  // article is a result from the CoreAPI
  return new Promise((resolve, reject) => {
    resolve({
      id: article.id, // another one made up from the generator
      abstract: article.abstract,
      authors: article.authors,
      createdDate: article.createdDate,
      downloadUrl: article.downloadUrl,
      title: article.title,
    });
  });
}

export function deleteArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      id: article.id, // another one made up from the generator
    });
  });
}
