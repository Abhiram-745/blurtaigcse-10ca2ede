// GCSE AQA Physics - 8 Base Topics with Module Structure
// Forces chapter includes detailed modules from forcesModuleData and energyModuleData

import { forcesModuleData, ForcesModule } from './forcesModuleData';
import { energyModuleData, EnergyModule } from './energyModuleData';
import { energyTransfersModuleData, EnergyTransfersModule } from './energyTransfersModuleData';
import { motionModuleData, MotionModule } from './motionModuleData';

export interface PracticeItem {
  id: string;
  prompt_template: string;
  marks: number;
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[];
}

export interface Subsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: PracticeItem[];
  study_group?: number;
}

export interface Module {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
}

export interface TopicSection {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
  modules?: Module[];
}

// Convert ForcesModule to Module type
const forcesModule: Module = {
  id: forcesModuleData.id,
  title: forcesModuleData.title,
  status: forcesModuleData.status,
  subsections: forcesModuleData.subsections as Subsection[]
};

// Convert EnergyModule to Module type
const energyModule: Module = {
  id: energyModuleData.id,
  title: energyModuleData.title,
  status: energyModuleData.status,
  subsections: energyModuleData.subsections as Subsection[]
};

// Convert EnergyTransfersModule to Module type
const energyTransfersModule: Module = {
  id: energyTransfersModuleData.id,
  title: energyTransfersModuleData.title,
  status: energyTransfersModuleData.status,
  subsections: energyTransfersModuleData.subsections as Subsection[]
};

// Convert MotionModule to Module type
const motionModule: Module = {
  id: motionModuleData.id,
  title: motionModuleData.title,
  status: motionModuleData.status,
  subsections: motionModuleData.subsections as Subsection[]
};

export const physicsData: TopicSection[] = [
  {
    id: "energy",
    title: "Energy",
    status: "ready",
    subsections: [],
    modules: [energyTransfersModule]
  },
  {
    id: "electricity",
    title: "Electricity",
    status: "coming_soon",
    subsections: [
      {
        id: "4-2-1-current-vpd-resistance",
        title: "4.2.1 Current, Potential Difference and Resistance",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Key Ideas</h3>
  <ul>
    <li>Current (I) is the rate of flow of charge. Unit: ampere (A)</li>
    <li>Potential difference (V) is energy transferred per unit charge. Unit: volt (V)</li>
    <li>Resistance (R) opposes current. Ohm's law: V = I R</li>
  </ul>
</div>
        `,
        canonical_keywords:["current","charge","potential difference","voltage","resistance","Ohm's law","V=IR"],
        practice_items:[
          { id:"p1", prompt_template:"Define current and potential difference, including their units.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["current","rate of flow of charge","ampere","potential difference","energy per charge","volt"]},
          { id:"p2", prompt_template:"A component has resistance 20 Ω and current 0.4 A. Calculate the potential difference across it.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["V=IR","8 V"]}
        ]
      },
      {
        id: "4-2-2-series-parallel",
        title: "4.2.2 Series and Parallel Circuits",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Rules</h3>
  <ul>
    <li>Series: current same everywhere; potential differences add; total R = R1 + R2 …</li>
    <li>Parallel: potential difference same across branches; currents add; 1/R_total = 1/R1 + 1/R2 …</li>
  </ul>
</div>
        `,
        canonical_keywords:["series","parallel","current","potential difference","resistance","circuit rules"],
        practice_items:[
          { id:"p3", prompt_template:"In a series circuit, how do current and potential difference behave?", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["current same","potential differences add"]},
          { id:"p4", prompt_template:"Two 6 Ω resistors in parallel give what total resistance?", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["3 Ω","parallel formula"]}
        ]
      }
    ]
  },
  {
    id: "particle-model",
    title: "Particle Model of Matter",
    status: "coming_soon",
    subsections: [
      {
        id: "4-3-1-density",
        title: "4.3.1 Density of Materials",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Density</h3>
  <p>Density ρ = m / V. Typical units kg/m³. Measure mass with a balance and volume by geometry or displacement.</p>
</div>
        `,
        canonical_keywords:["density","rho","mass","volume","kg/m^3","displacement"],
        practice_items:[
          { id:"p1", prompt_template:"A block has mass 0.8 kg and volume 4×10^-4 m³. Calculate its density.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["ρ=m/V","2000 kg/m^3"]}
        ]
      },
      {
        id: "4-3-2-changes-of-state-internal-energy",
        title: "4.3.2 Changes of State and Internal Energy",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Internal Energy</h3>
  <p>Internal energy is the sum of the kinetic and potential energies of particles. Heating changes temperature or state.</p>
  <p>Specific latent heat L: energy to change state of 1 kg without temperature change.</p>
</div>
        `,
        canonical_keywords:["internal energy","specific latent heat","change of state","temperature","particle model"],
        practice_items:[
          { id:"p2", prompt_template:"Explain what is meant by specific latent heat.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["energy","1 kg","change of state","no temperature change"]}
        ]
      }
    ]
  },
  {
    id: "atomic-structure",
    title: "Atomic Structure",
    status: "coming_soon",
    subsections: [
      {
        id: "4-4-1-atom-and-isotopes",
        title: "4.4.1 Atoms and Isotopes",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Structure</h3>
  <p>Atoms have a nucleus of protons and neutrons with electrons in shells. Isotopes are atoms of the same element with different numbers of neutrons.</p>
</div>
        `,
        canonical_keywords:["proton","neutron","electron","nucleus","isotopes"],
        practice_items:[
          { id:"p1", prompt_template:"Define an isotope and give one example.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["same element","different neutrons","example"]}
        ]
      },
      {
        id: "4-4-2-radioactivity-half-life",
        title: "4.4.2 Radioactive Decay and Half-life",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Key Ideas</h3>
  <p>Alpha, beta and gamma radiation; random and spontaneous decay; half-life is the time for activity to halve.</p>
</div>
        `,
        canonical_keywords:["alpha","beta","gamma","radioactive","decay","half-life","activity"],
        practice_items:[
          { id:"p2", prompt_template:"Explain what is meant by the half-life of a radioactive isotope.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["time","activity halves","nuclei","decay"]}
        ]
      }
    ]
  },
  {
    id: "forces",
    title: "Forces",
    status: "ready",
    subsections: [], // No direct subsections - all content is in modules
    modules: [forcesModule, energyModule, motionModule]
  },
{
    id: "waves",
    title: "Waves",
    status: "ready",
    modules: [
      {
        id: "waves-module-1",
        title: "Module 1: Wave Properties & Behaviour",
        status: "ready",
        subsections: [
          {
            id: "4-6-1-1-transverse-longitudinal",
            title: "4.6.1.1 – Transverse and Longitudinal Waves",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Waves Transfer Energy</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>Waves transfer <strong>energy</strong> from one place to another <strong>without transferring matter</strong>.</p>
    <p>There are two types of mechanical wave motion:</p>
    <ul>
      <li>Transverse waves</li>
      <li>Longitudinal waves</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Transverse Waves</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>In a transverse wave, the vibrations of particles are <strong>perpendicular (at right angles)</strong> to the direction that the wave travels.</p>
  </div>
  <div class="key-facts-block">
    <h4>Key Features:</h4>
    <ul>
      <li>Wave moves horizontally, particles move up and down</li>
      <li>Produces crests (peaks) and troughs</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>Example:</h4>
    <p>Ripples on a water surface are transverse waves.</p>
  </div>
  
  <!-- Animated Transverse Wave Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Transverse Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <path d="M20 90 Q55 30, 90 90 T160 90 T230 90 T300 90 T370 90" fill="none" stroke="#3b82f6" stroke-width="3" class="anim-wave"/>
        <text x="55" y="25" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Crest</text>
        <line x1="55" y1="30" x2="55" y2="50" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="125" y="165" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Trough</text>
        <line x1="125" y1="130" x2="125" y2="155" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="55" y1="50" x2="55" y2="90" stroke="#f59e0b" stroke-width="2"/>
        <text x="78" y="75" fill="#f59e0b" font-size="10" font-weight="bold">A</text>
        <line x1="55" y1="105" x2="195" y2="105" stroke="#ec4899" stroke-width="2"/>
        <text x="125" y="120" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Wavelength</text>
        <line x1="20" y1="90" x2="380" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        <path d="M310 60 L350 60" stroke="currentColor" stroke-width="2" marker-end="url(#arrowWaveT)"/>
        <text x="330" y="50" fill="currentColor" font-size="9" text-anchor="middle">Wave direction</text>
        <line x1="20" y1="50" x2="20" y2="130" stroke="#6366f1" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="35" y="145" fill="#6366f1" font-size="8">Particle motion</text>
        <defs>
          <marker id="arrowWaveT" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Particles vibrate <strong>perpendicular</strong> to wave direction</p>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td>Particle motion</td><td>Perpendicular to wave direction</td></tr>
      <tr><td>Wave shape</td><td>Peaks and troughs</td></tr>
      <tr><td>Examples</td><td>Water ripples, light waves, S-waves</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Longitudinal Waves</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>In a longitudinal wave, the oscillations are <strong>parallel</strong> to the direction the wave travels.</p>
  </div>
  <div class="key-facts-block">
    <h4>Key Features:</h4>
    <ul>
      <li><strong>Compressions</strong> - particles close together</li>
      <li><strong>Rarefactions</strong> - particles spread apart</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>Example:</h4>
    <p>Sound waves in air are longitudinal.</p>
  </div>
  
  <!-- Animated Longitudinal Wave -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Longitudinal Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <g class="anim-oscillate-x">
          <circle cx="40" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="54" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="68" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="82" cy="80" r="6" fill="#3b82f6"/>
        </g>
        <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
          <circle cx="110" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="145" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="180" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
        </g>
        <g class="anim-oscillate-x">
          <circle cx="210" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="224" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="238" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="252" cy="80" r="6" fill="#3b82f6"/>
        </g>
        <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
          <circle cx="280" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="315" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="350" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
        </g>
        <text x="61" y="45" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Compression</text>
        <text x="145" y="120" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Rarefaction</text>
        <line x1="40" y1="20" x2="210" y2="20" stroke="#ec4899" stroke-width="2"/>
        <text x="125" y="14" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Wavelength</text>
        <path d="M360 50 L385 50" stroke="currentColor" stroke-width="2" marker-end="url(#arrowLongT)"/>
        <text x="372" y="42" fill="currentColor" font-size="8" text-anchor="middle">Wave</text>
        <path d="M360 105 L385 105" stroke="#6366f1" stroke-width="2"/>
        <text x="372" y="145" fill="#6366f1" font-size="8" text-anchor="middle">Particle</text>
        <defs>
          <marker id="arrowLongT" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Particles vibrate <strong>parallel</strong> to wave direction</p>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td>Particle motion</td><td>Parallel to wave direction</td></tr>
      <tr><td>Wave shape</td><td>Compressions and rarefactions</td></tr>
      <tr><td>Examples</td><td>Sound waves, P-waves, slinky</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Comparison Table</h3>
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Feature</th><th>Transverse</th><th>Longitudinal</th></tr></thead>
    <tbody>
      <tr><td>Direction of oscillations</td><td>Perpendicular to travel</td><td>Parallel to travel</td></tr>
      <tr><td>Appearance</td><td>Peaks + troughs</td><td>Compressions + rarefactions</td></tr>
      <tr><td>Travels through</td><td>Solids, liquid surfaces</td><td>Solids, liquids, gases</td></tr>
      <tr><td>Example</td><td>Water ripples</td><td>Sound waves</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Evidence Waves Transfer Energy Not Matter</h3>
  <div class="key-facts-block">
    <h4>Water Surface Evidence:</h4>
    <ul>
      <li>Float a cork on water</li>
      <li>When waves pass, cork moves up and down only</li>
      <li>Cork does NOT travel with the wave</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>Sound in Air Evidence:</h4>
    <ul>
      <li>When someone speaks, air molecules do not flow across the room</li>
      <li>Regions of high and low pressure move through the air</li>
      <li>Energy travels, not matter</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["waves", "energy transfer", "transverse", "longitudinal", "compression", "rarefaction", "perpendicular", "parallel"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Define what a wave is and explain what waves transfer.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["wave", "transfer", "energy", "not matter"]
              },
              {
                id: "p2",
                prompt_template: "Explain the difference between transverse and longitudinal waves.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["transverse", "longitudinal", "perpendicular", "parallel", "compression", "rarefaction"]
              }
            ]
          },
          {
            id: "4-6-1-2-wave-properties",
            title: "4.6.1.2 – Properties of Waves",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Wave Properties</h3>
  <div class="definition-block">
    <h4>Amplitude (A):</h4>
    <p>Maximum displacement from rest position. Measured in metres (m).</p>
  </div>
  <div class="definition-block">
    <h4>Wavelength (λ):</h4>
    <p>Distance between repeating points (crest to crest). Measured in metres (m).</p>
  </div>
  <div class="definition-block">
    <h4>Frequency (f):</h4>
    <p>Number of complete waves per second. Measured in hertz (Hz).</p>
  </div>
  <div class="definition-block">
    <h4>Period (T):</h4>
    <p>Time for one complete wave. T = 1/f</p>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Wave Properties Diagram</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="200" viewBox="0 0 420 200">
        <line x1="40" y1="100" x2="400" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        <path d="M40 100 Q70 40, 100 100 T160 100 T220 100 T280 100 T340 100 T400 100" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <line x1="70" y1="40" x2="70" y2="100" stroke="#f59e0b" stroke-width="3"/>
        <text x="108" y="74" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">Amplitude</text>
        <line x1="100" y1="175" x2="220" y2="175" stroke="#ec4899" stroke-width="3"/>
        <text x="160" y="167" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">Wavelength (λ)</text>
        <text x="70" y="28" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Crest</text>
        <text x="130" y="180" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Trough</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Quantity</th><th>Symbol</th><th>Unit</th></tr></thead>
    <tbody>
      <tr><td>Amplitude</td><td>A</td><td>m</td></tr>
      <tr><td>Wavelength</td><td>λ</td><td>m</td></tr>
      <tr><td>Frequency</td><td>f</td><td>Hz</td></tr>
      <tr><td>Period</td><td>T</td><td>s</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Wave Speed Equation</h3>
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Wave Equation:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">v = f × λ</p>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Wave speed (m/s) = Frequency (Hz) × Wavelength (m)</p>
  </div>
  <div class="key-facts-block">
    <h4>Key Relationships:</h4>
    <ul>
      <li>If frequency increases and wavelength stays constant → wave speed increases</li>
      <li>If wavelength decreases and frequency stays constant → wave speed decreases</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Measuring Speed of Sound</h3>
  <div class="key-facts-block">
    <h4>Method:</h4>
    <ol>
      <li>Two students stand 30-50 m apart</li>
      <li>Student A claps wooden blocks together</li>
      <li>Student B times from seeing clap to hearing sound</li>
      <li>Repeat and average</li>
      <li>Calculate: v = d/t</li>
    </ol>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Speed of Sound Experiment</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <circle cx="60" cy="50" r="15" fill="#3b82f6"/>
        <text x="60" y="55" fill="white" font-size="10" text-anchor="middle">A</text>
        <text x="60" y="85" fill="currentColor" font-size="9" text-anchor="middle">Clapper</text>
        <circle cx="340" cy="50" r="15" fill="#22c55e"/>
        <text x="340" y="55" fill="white" font-size="10" text-anchor="middle">B</text>
        <text x="340" y="85" fill="currentColor" font-size="9" text-anchor="middle">Timer</text>
        <line x1="85" y1="50" x2="315" y2="50" stroke="#ec4899" stroke-width="2"/>
        <text x="200" y="42" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">30-50 m</text>
        <text x="200" y="110" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">v = d / t</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Required Practical: Ripple Tank</h3>
  <div class="key-facts-block">
    <h4>Equipment:</h4>
    <ul>
      <li>Ripple tank with water</li>
      <li>Oscillating bar/motor</li>
      <li>Lamp above tank</li>
      <li>Screen/paper beneath</li>
      <li>Ruler and stopwatch</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Ripple Tank Setup</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <ellipse cx="190" cy="20" rx="30" ry="10" fill="#fbbf24"/>
        <text x="190" y="10" fill="currentColor" font-size="9" text-anchor="middle">Lamp</text>
        <rect x="80" y="60" width="220" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="5"/>
        <path d="M90 100 Q110 85, 130 100 T170 100 T210 100 T250 100 T290 100" fill="none" stroke="#3b82f6" stroke-width="2" class="anim-wave"/>
        <rect x="90" y="65" width="200" height="8" fill="#6366f1" rx="2"/>
        <text x="190" y="62" fill="#6366f1" font-size="8" text-anchor="middle">Vibrating bar</text>
        <rect x="80" y="160" width="220" height="25" fill="hsl(var(--muted))" stroke="currentColor" stroke-width="1" rx="3"/>
        <text x="190" y="177" fill="currentColor" font-size="9" text-anchor="middle">Screen showing wave shadows</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Method - Measuring Wavelength:</h4>
    <ol>
      <li>Turn on lamp to see wave shadows on screen</li>
      <li>Identify at least 5 consecutive peaks</li>
      <li>Measure total distance</li>
      <li>Divide by number of wavelengths</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>Calculating Wave Speed:</h4>
    <p>Once λ and f are known: <strong>v = f × λ</strong></p>
  </div>
</div>
            `,
            canonical_keywords: ["amplitude", "wavelength", "frequency", "period", "wave speed", "v=fλ", "ripple tank"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "A wave has frequency 50 Hz and wavelength 2 m. Calculate the wave speed.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["v=fλ", "100 m/s"]
              },
              {
                id: "p2",
                prompt_template: "Define amplitude and wavelength.",
                marks: 4,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["amplitude", "maximum displacement", "wavelength", "distance", "crest"]
              }
            ]
          },
          {
            id: "4-6-1-3-reflection-waves",
            title: "4.6.1.3 – Reflection of Waves",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Waves at Boundaries</h3>
  <div class="definition-block">
    <h4>What happens at boundaries:</h4>
    <ul>
      <li><strong>Reflection:</strong> Wave bounces back into original medium</li>
      <li><strong>Transmission:</strong> Wave passes through to new medium</li>
      <li><strong>Absorption:</strong> Energy absorbed by material (becomes heat)</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Wave Behaviour at Boundaries</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <line x1="200" y1="20" x2="200" y2="160" stroke="currentColor" stroke-width="3"/>
        <text x="200" y="175" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Boundary</text>
        <text x="100" y="30" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">Medium 1</text>
        <text x="300" y="30" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Medium 2</text>
        <line x1="60" y1="60" x2="200" y2="90" stroke="#3b82f6" stroke-width="2"/>
        <text x="100" y="55" fill="#3b82f6" font-size="9">Incident</text>
        <line x1="200" y1="90" x2="60" y2="120" stroke="#ef4444" stroke-width="2"/>
        <text x="100" y="140" fill="#ef4444" font-size="9">Reflected</text>
        <line x1="200" y1="90" x2="340" y2="120" stroke="#22c55e" stroke-width="2"/>
        <text x="300" y="110" fill="#22c55e" font-size="9">Transmitted</text>
        <circle cx="200" cy="90" r="8" fill="#f59e0b" opacity="0.5" class="anim-pulse"/>
        <text x="215" y="80" fill="#f59e0b" font-size="8">Absorbed</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Law of Reflection</h3>
  <div class="definition-block">
    <h4>Key Terms:</h4>
    <ul>
      <li><strong>Incident ray:</strong> ray that hits the boundary</li>
      <li><strong>Reflected ray:</strong> ray that bounces off</li>
      <li><strong>Normal:</strong> line at 90 degrees to the boundary</li>
      <li><strong>Angle of incidence (i):</strong> angle between incident ray and normal</li>
      <li><strong>Angle of reflection (r):</strong> angle between reflected ray and normal</li>
    </ul>
  </div>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Law of Reflection:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">Angle i = Angle r</p>
    <p style="font-size: 0.9rem;">Angle of incidence = Angle of reflection</p>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Ray Diagram for Reflection</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <line x1="60" y1="140" x2="320" y2="140" stroke="currentColor" stroke-width="4"/>
        <text x="340" y="145" fill="currentColor" font-size="9">Mirror</text>
        <line x1="190" y1="40" x2="190" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="205" y="50" fill="currentColor" font-size="9">Normal</text>
        <line x1="80" y1="50" x2="190" y2="140" stroke="#3b82f6" stroke-width="2"/>
        <text x="100" y="70" fill="#3b82f6" font-size="10" font-weight="bold">Incident ray</text>
        <line x1="190" y1="140" x2="300" y2="50" stroke="#ef4444" stroke-width="2"/>
        <text x="270" y="70" fill="#ef4444" font-size="10" font-weight="bold">Reflected ray</text>
        <path d="M190 100 A40 40 0 0 0 155 125" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="155" y="95" fill="#3b82f6" font-size="11" font-weight="bold">i</text>
        <path d="M190 100 A40 40 0 0 1 225 125" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="225" y="95" fill="#ef4444" font-size="11" font-weight="bold">r</text>
        <rect x="130" y="170" width="120" height="25" fill="hsl(var(--primary)/0.2)" rx="5"/>
        <text x="190" y="187" fill="hsl(var(--primary))" font-size="12" text-anchor="middle" font-weight="bold">i = r</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Required Practical: Reflection</h3>
  <div class="key-facts-block">
    <h4>Aim:</h4>
    <p>Investigate the law of reflection using ray boxes and plane mirrors.</p>
  </div>
  <div class="key-facts-block">
    <h4>Method:</h4>
    <ol>
      <li>Place mirror on paper and draw around it</li>
      <li>Draw a normal at 90 degrees to mirror surface</li>
      <li>Shine a ray from ray box onto mirror at an angle</li>
      <li>Mark incident and reflected rays</li>
      <li>Measure angles with protractor</li>
      <li>Repeat for several angles</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>Expected Result:</h4>
    <p><strong>Angle i = Angle r</strong> - confirms the law of reflection.</p>
  </div>
</div>
            `,
            canonical_keywords: ["reflection", "transmission", "absorption", "boundary", "incident ray", "reflected ray", "normal", "angle of incidence", "angle of reflection"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "State the law of reflection.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["angle of incidence", "angle of reflection", "equal"]
              }
            ]
          },
          {
            id: "4-6-1-4-sound-waves",
            title: "4.6.1.4 – Sound Waves",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – How Sound Waves Travel</h3>
  <div class="definition-block">
    <h4>Sound Waves:</h4>
    <p>Sound waves are <strong>longitudinal</strong> waves consisting of:</p>
    <ul>
      <li><strong>Compressions</strong> (high pressure)</li>
      <li><strong>Rarefactions</strong> (low pressure)</li>
    </ul>
    <p>They <strong>cannot travel in a vacuum</strong> - they need particles to vibrate.</p>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Speed of Sound in Different Media</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <rect x="30" y="30" width="100" height="30" fill="#3b82f6" rx="3"/>
        <text x="80" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">SOLID</text>
        <text x="80" y="80" fill="#3b82f6" font-size="9" text-anchor="middle">Fastest ~5000 m/s</text>
        <rect x="150" y="30" width="100" height="30" fill="#22c55e" rx="3"/>
        <text x="200" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">LIQUID</text>
        <text x="200" y="80" fill="#22c55e" font-size="9" text-anchor="middle">Medium ~1500 m/s</text>
        <rect x="270" y="30" width="100" height="30" fill="#f59e0b" rx="3"/>
        <text x="320" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">GAS</text>
        <text x="320" y="80" fill="#f59e0b" font-size="9" text-anchor="middle">Slowest ~340 m/s</text>
        <text x="80" y="105" fill="currentColor" font-size="8" text-anchor="middle">Particles close</text>
        <text x="200" y="105" fill="currentColor" font-size="8" text-anchor="middle">Moderate</text>
        <text x="320" y="105" fill="currentColor" font-size="8" text-anchor="middle">Far apart</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Medium</th><th>Speed</th><th>Reason</th></tr></thead>
    <tbody>
      <tr><td>Solids</td><td>Fastest</td><td>Vibrations transfer quickly</td></tr>
      <tr><td>Liquids</td><td>Medium</td><td>Less rigid but connected</td></tr>
      <tr><td>Gases</td><td>Slowest</td><td>Fewer particle collisions</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Human Hearing Range</h3>
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Human Hearing Range:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">20 Hz - 20 kHz</p>
    <p style="font-size: 0.9rem;">Children and teenagers have widest range; reduces with age.</p>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Limited Frequency Range?</h4>
    <ul>
      <li>Ear structures cannot vibrate at all frequencies</li>
      <li>High frequencies (above 20 kHz) - vibrations too fast for hair cells</li>
      <li>Low frequencies (below 20 Hz) - cause little ear movement</li>
    </ul>
  </div>
  
  <div class="example-block">
    <h4>Other Animals:</h4>
    <ul>
      <li>Dogs: up to 45 kHz</li>
      <li>Bats: up to 100 kHz</li>
      <li>Elephants: use infrasound (below 20 Hz)</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["sound waves", "longitudinal", "compression", "rarefaction", "hearing range", "20 Hz", "20 kHz"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain why sound cannot travel through a vacuum.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["vacuum", "no particles", "vibrate", "longitudinal"]
              },
              {
                id: "p2",
                prompt_template: "State the human hearing range.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["20 Hz", "20 kHz"]
              }
            ]
          },
          {
            id: "4-6-1-5-detection-exploration",
            title: "4.6.1.5 – Waves for Detection and Exploration",
            type: "content",
            study_group: 3,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Ultrasound Waves</h3>
  <div class="definition-block">
    <h4>Ultrasound:</h4>
    <ul>
      <li>Frequency <strong>above 20 kHz</strong> (higher than human hearing)</li>
      <li>Partially reflected at boundaries between different media</li>
      <li>Safe - no ionising radiation</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>How Ultrasound Imaging Works:</h4>
    <ol>
      <li>Ultrasound pulse transmitted into body/object</li>
      <li>Part of wave reflects at boundaries</li>
      <li>Detector measures time for reflections to return</li>
      <li>Calculate: <strong>distance = (speed × time) ÷ 2</strong></li>
    </ol>
    <p><em>(Divide by 2 because wave travels there AND back)</em></p>
  </div>
  
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Ultrasound Imaging (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="180" viewBox="0 0 380 180">
        <rect x="30" y="60" width="40" height="80" fill="#6366f1" rx="5"/>
        <text x="50" y="110" fill="white" font-size="8" text-anchor="middle">Probe</text>
        <rect x="80" y="40" width="200" height="120" fill="hsl(var(--muted))" rx="10" stroke="currentColor" stroke-width="1"/>
        <text x="180" y="55" fill="currentColor" font-size="9" text-anchor="middle">Body Tissue</text>
        <ellipse cx="200" cy="100" rx="40" ry="35" fill="#ec4899" opacity="0.6"/>
        <text x="200" y="105" fill="white" font-size="9" text-anchor="middle">Organ</text>
        <g class="anim-flow-right">
          <line x1="75" y1="85" x2="155" y2="85" stroke="#3b82f6" stroke-width="2"/>
          <circle cx="155" cy="85" r="4" fill="#3b82f6"/>
        </g>
        <g class="anim-flow-left" style="animation-delay: 0.5s;">
          <line x1="155" y1="115" x2="75" y2="115" stroke="#ef4444" stroke-width="2"/>
          <circle cx="75" cy="115" r="4" fill="#ef4444"/>
        </g>
        <text x="115" y="78" fill="#3b82f6" font-size="8">Transmitted</text>
        <text x="115" y="130" fill="#ef4444" font-size="8">Reflected</text>
        <rect x="300" y="50" width="70" height="80" fill="#1e1e1e" stroke="currentColor" stroke-width="2" rx="5"/>
        <ellipse cx="335" cy="90" rx="20" ry="15" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="335" y="145" fill="currentColor" font-size="8" text-anchor="middle">Image formed</text>
        <text x="335" y="165" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">d = (v × t) ÷ 2</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Uses of Ultrasound:</h4>
    <p><strong>Medical:</strong> prenatal scans, organ imaging, blood flow monitoring</p>
    <p><strong>Industrial:</strong> detecting cracks in metals, pipeline thickness</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Seismic Waves</h3>
  <div class="definition-block">
    <h4>Seismic Waves:</h4>
    <p>Produced by earthquakes. Allow exploration of Earth's structure.</p>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Type</th><th>Nature</th><th>Travels Through</th><th>Speed</th></tr></thead>
    <tbody>
      <tr><td>P-waves</td><td>Longitudinal</td><td>Solids and liquids</td><td>Fast (arrive first)</td></tr>
      <tr><td>S-waves</td><td>Transverse</td><td>Only solids</td><td>Slower</td></tr>
    </tbody>
  </table>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>P-waves vs S-waves Through Earth</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <circle cx="190" cy="100" r="90" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="190" cy="100" r="20" fill="#f59e0b"/>
        <text x="190" y="103" fill="white" font-size="7" text-anchor="middle">Inner core</text>
        <circle cx="190" cy="100" r="45" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="190" y="62" fill="#ef4444" font-size="8" text-anchor="middle">Liquid outer core</text>
        <circle cx="100" cy="50" r="8" fill="#ec4899" class="anim-pulse"/>
        <text x="100" y="35" fill="#ec4899" font-size="8" text-anchor="middle">Earthquake</text>
        <path d="M108 55 Q190 100, 272 55" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <path d="M108 55 Q190 150, 272 145" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="310" y="50" fill="#3b82f6" font-size="9">P-waves (through)</text>
        <path d="M108 55 Q150 100, 145 100" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="145" y="120" fill="#ef4444" font-size="8">S-waves BLOCKED</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Why S-waves Cannot Travel Through Liquids:</h4>
    <ul>
      <li>Liquids do not support shear vibrations</li>
      <li>Transverse waves need rigid material</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>What This Tells Us:</h4>
    <ul>
      <li>S-waves do NOT appear on opposite side of Earth → outer core is liquid</li>
      <li>P-waves refract through layers → reveals density boundaries</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Echo Sounding (Sonar)</h3>
  <div class="definition-block">
    <h4>Echo Sounding:</h4>
    <p>Uses high-frequency sound waves to explore deep water and detect underwater objects.</p>
  </div>
  
  <div class="key-facts-block">
    <h4>How It Works:</h4>
    <ol>
      <li>Ship sends ultrasound pulse downward</li>
      <li>Wave reflects off seabed/object</li>
      <li>Detector receives reflection</li>
      <li>Calculate: <strong>depth = (v × t) ÷ 2</strong></li>
    </ol>
  </div>
  
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Echo Sounding (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="180" viewBox="0 0 300 180">
        <line x1="20" y1="30" x2="280" y2="30" stroke="#3b82f6" stroke-width="2"/>
        <text x="260" y="25" fill="#3b82f6" font-size="8">Water surface</text>
        <rect x="120" y="15" width="60" height="20" fill="currentColor" rx="3"/>
        <text x="150" y="12" fill="currentColor" font-size="8" text-anchor="middle">Ship</text>
        <path d="M20 150 Q80 140, 150 150 T280 150" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <text x="260" y="165" fill="#f59e0b" font-size="8">Seabed</text>
        <g class="anim-flow-down">
          <line x1="150" y1="40" x2="150" y2="100" stroke="#22c55e" stroke-width="2"/>
          <circle cx="150" cy="100" r="5" fill="#22c55e"/>
        </g>
        <g class="anim-flow-up" style="animation-delay: 1s;">
          <line x1="150" y1="145" x2="150" y2="100" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="100" r="5" fill="#ef4444"/>
        </g>
        <text x="150" y="175" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">d = (v × t) ÷ 2</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Uses:</h4>
    <ul>
      <li>Measuring ocean depth</li>
      <li>Detecting submarines/shipwrecks</li>
      <li>Mapping fish populations</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["ultrasound", "seismic waves", "P-waves", "S-waves", "echo sounding", "sonar", "detection"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain how ultrasound creates images of a baby in the womb.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["ultrasound", "pulse", "boundary", "reflected", "time", "distance"]
              },
              {
                id: "p2",
                prompt_template: "A sonar pulse takes 0.4 seconds to return. Speed of sound in water is 1500 m/s. Calculate depth.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["300 m", "divide by 2"]
              }
            ]
          },
          {
            id: "4-6-2-specular-diffuse",
            title: "4.6.2.6 – Specular and Diffuse Reflection",
            type: "content",
            study_group: 3,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Types of Reflection</h3>
  <div class="definition-block">
    <h4>Specular Reflection:</h4>
    <ul>
      <li>Surface: Smooth and flat (mirror, polished metal)</li>
      <li>Reflection: Neat, single clear direction</li>
      <li>Result: Clear image formed</li>
    </ul>
  </div>
  
  <div class="definition-block">
    <h4>Diffuse Reflection:</h4>
    <ul>
      <li>Surface: Rough or uneven (paper, wood, stone)</li>
      <li>Reflection: Scattered in multiple directions</li>
      <li>Result: No clear image</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Specular vs Diffuse Reflection</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <text x="100" y="20" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">Specular</text>
        <line x1="30" y1="100" x2="170" y2="100" stroke="#3b82f6" stroke-width="3"/>
        <text x="100" y="115" fill="currentColor" font-size="8" text-anchor="middle">Smooth surface</text>
        <line x1="60" y1="40" x2="80" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="90" y1="40" x2="100" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="120" y1="40" x2="120" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="80" y1="100" x2="100" y2="40" stroke="#22c55e" stroke-width="2"/>
        <line x1="100" y1="100" x2="110" y2="40" stroke="#22c55e" stroke-width="2"/>
        <line x1="120" y1="100" x2="120" y2="40" stroke="#22c55e" stroke-width="2"/>
        <text x="100" y="145" fill="#22c55e" font-size="9" text-anchor="middle">Clear image</text>
        <line x1="200" y1="10" x2="200" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        <text x="300" y="20" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">Diffuse</text>
        <path d="M230 100 L240 95 L250 100 L260 95 L270 100 L280 95 L290 100 L300 95 L310 100 L320 95 L330 100 L340 95 L350 100 L360 95 L370 100" fill="none" stroke="#ef4444" stroke-width="3"/>
        <text x="300" y="115" fill="currentColor" font-size="8" text-anchor="middle">Rough surface</text>
        <line x1="280" y1="40" x2="290" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="300" y1="40" x2="300" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="320" y1="40" x2="310" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="290" y1="98" x2="260" y2="50" stroke="#22c55e" stroke-width="2"/>
        <line x1="300" y1="98" x2="310" y2="45" stroke="#22c55e" stroke-width="2"/>
        <line x1="310" y1="98" x2="350" y2="55" stroke="#22c55e" stroke-width="2"/>
        <text x="300" y="145" fill="#ef4444" font-size="9" text-anchor="middle">No clear image</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Why Surfaces Behave Differently</h3>
  <div class="key-facts-block">
    <h4>Explanation:</h4>
    <ul>
      <li><strong>Smooth surfaces:</strong> all rays reflect in same direction</li>
      <li><strong>Rough surfaces:</strong> microscopic bumps cause rays to scatter</li>
      <li>Law of reflection still holds for each individual ray</li>
    </ul>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Type</th><th>Examples</th><th>Result</th></tr></thead>
    <tbody>
      <tr><td>Specular</td><td>Mirrors, calm water, polished metal</td><td>Clear reflections</td></tr>
      <tr><td>Diffuse</td><td>Paper, rough concrete, wood</td><td>Light spreads out</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>Why Diffuse Reflection Is Important:</h4>
    <ul>
      <li>Prevents glare</li>
      <li>Allows us to see most objects</li>
      <li>Provides even illumination</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["specular reflection", "diffuse reflection", "smooth surface", "rough surface"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain the difference between specular and diffuse reflection.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["specular", "smooth", "same direction", "diffuse", "rough", "scattered"]
              }
            ]
          },
          {
            id: "4-6-2-2-em-refraction",
            title: "4.6.2.2 – Refraction of EM Waves",
            type: "content",
            study_group: 3,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – How EM Waves Interact with Substances</h3>
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Process</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>Absorption</td><td>Wave energy taken in</td><td>Black surfaces absorb light</td></tr>
      <tr><td>Transmission</td><td>Wave passes through</td><td>Glass allows light through</td></tr>
      <tr><td>Reflection</td><td>Wave bounces off</td><td>Mirrors reflect light</td></tr>
      <tr><td>Refraction</td><td>Wave changes direction</td><td>Light bending in water</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Why Refraction Occurs</h3>
  <div class="key-facts-block">
    <h4>When EM Wave Enters New Medium:</h4>
    <ul>
      <li><strong>Speed changes</strong></li>
      <li><strong>Wavelength changes</strong></li>
      <li><strong>Frequency stays the same</strong> (set by source)</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Light Refraction at Boundary</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="350" height="200" viewBox="0 0 350 200">
        <rect x="30" y="20" width="290" height="80" fill="hsl(var(--background))" stroke="none"/>
        <text x="50" y="50" fill="currentColor" font-size="10">Air (less dense)</text>
        <rect x="30" y="100" width="290" height="80" fill="hsl(var(--primary)/0.1)" stroke="none"/>
        <text x="50" y="165" fill="currentColor" font-size="10">Glass (denser)</text>
        <line x1="30" y1="100" x2="320" y2="100" stroke="currentColor" stroke-width="2"/>
        <line x1="175" y1="30" x2="175" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="185" y="40" fill="currentColor" font-size="9">Normal</text>
        <line x1="100" y1="30" x2="175" y2="100" stroke="#3b82f6" stroke-width="2"/>
        <text x="105" y="55" fill="#3b82f6" font-size="9">Incident ray</text>
        <line x1="175" y1="100" x2="230" y2="170" stroke="#22c55e" stroke-width="2"/>
        <text x="215" y="150" fill="#22c55e" font-size="9">Refracted ray</text>
        <path d="M175 70 A30 30 0 0 0 150 90" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="145" y="75" fill="#3b82f6" font-size="10" font-weight="bold">i</text>
        <path d="M175 130 A30 30 0 0 1 195 118" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="195" y="135" fill="#22c55e" font-size="10" font-weight="bold">r</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Entering...</th><th>What Happens</th><th>Ray Behaviour</th></tr></thead>
    <tbody>
      <tr><td>Denser medium</td><td>Speed decreases, wavelength decreases</td><td>Bends towards normal</td></tr>
      <tr><td>Less dense medium</td><td>Speed increases, wavelength increases</td><td>Bends away from normal</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>Remember:</h4>
    <p><strong>Frequency never changes</strong> - it is set by the original wave source.</p>
  </div>
</div>
            `,
            canonical_keywords: ["electromagnetic waves", "refraction", "absorption", "transmission", "wavelength", "frequency", "speed"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain what happens to speed, wavelength and frequency when light enters glass from air.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["speed decreases", "wavelength decreases", "frequency same"]
              }
            ]
          }
        ]
      }
    ],
    subsections: []
  },
  {
    id: "magnetism",
    title: "Magnetism and Electromagnetism",
    status: "coming_soon",
    subsections: [
      {
        id: "4-7-1-permanent-induced-magnets",
        title: "4.7.1 Permanent and Induced Magnets",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Magnets</h3>
  <ul>
    <li>Permanent magnets: produce their own magnetic field</li>
    <li>Induced magnets: become magnetic when in a magnetic field</li>
    <li>Like poles repel, unlike poles attract</li>
  </ul>
</div>
        `,
        canonical_keywords: ["permanent magnet", "induced magnet", "magnetic field", "poles", "attract", "repel"],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Explain the difference between a permanent and an induced magnet.",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["permanent", "own field", "induced", "only magnetic in field"]
          }
        ]
      }
    ]
  },
  {
    id: "space",
    title: "Space Physics",
    status: "coming_soon",
    subsections: []
  }
];
