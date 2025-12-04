// Optics Module Data - 4.6.2.5 Lenses and 4.6.2.6 Visible Light
// AQA GCSE Physics Waves Chapter

export interface OpticsPracticeItem {
  id: string;
  prompt_template: string;
  marks: number;
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[];
}

export interface OpticsSubsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: OpticsPracticeItem[];
  study_group?: number;
}

export interface OpticsModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: OpticsSubsection[];
}

export const opticsModuleData: OpticsModule = {
  id: "optics-module",
  title: "Module 3: Optics",
  status: "ready",
  subsections: [
    {
      id: "4-6-2-5-lenses-intro",
      title: "4.6.2.5 – Lenses: What a Lens Does",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What a Lens Does</h3>
  
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>A <strong>lens</strong> forms an image by <strong>refracting light</strong> — bending rays as they pass from one transparent material to another. The amount of bending depends on the shape of the lens and the angle at which light enters.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔑 Key Idea:</h4>
    <p>Lenses control light so that rays <strong>meet (converge)</strong> or <strong>spread out (diverge)</strong>, creating an image that can be magnified, reduced, real, or virtual.</p>
  </div>

  <!-- Animated Lens Light Control Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>How Lenses Control Light (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="200" viewBox="0 0 420 200">
        <!-- Background -->
        <rect x="0" y="0" width="420" height="200" fill="none"/>
        
        <!-- Converging Lens Section -->
        <text x="105" y="20" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">Converging (Convex)</text>
        
        <!-- Convex lens shape -->
        <ellipse cx="105" cy="100" rx="12" ry="60" fill="hsl(var(--primary)/0.2)" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Incoming parallel rays -->
        <line x1="20" y1="60" x2="93" y2="60" stroke="#f59e0b" stroke-width="2" class="anim-dash">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="20" y1="100" x2="93" y2="100" stroke="#f59e0b" stroke-width="2" class="anim-dash">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="20" y1="140" x2="93" y2="140" stroke="#f59e0b" stroke-width="2" class="anim-dash">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Converging rays after lens -->
        <line x1="117" y1="60" x2="175" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="117" y1="100" x2="175" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="117" y1="140" x2="175" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Focus point -->
        <circle cx="175" cy="100" r="5" fill="#ef4444">
          <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite"/>
        </circle>
        <text x="175" y="125" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F (Focus)</text>
        
        <!-- Diverging Lens Section -->
        <text x="315" y="20" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">Diverging (Concave)</text>
        
        <!-- Concave lens shape -->
        <path d="M303 40 Q315 100 303 160 M327 40 Q315 100 327 160" fill="none" stroke="#ec4899" stroke-width="2"/>
        <line x1="303" y1="40" x2="327" y2="40" stroke="#ec4899" stroke-width="2"/>
        <line x1="303" y1="160" x2="327" y2="160" stroke="#ec4899" stroke-width="2"/>
        
        <!-- Incoming parallel rays -->
        <line x1="230" y1="60" x2="303" y2="60" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="230" y1="100" x2="303" y2="100" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="230" y1="140" x2="303" y2="140" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Diverging rays after lens -->
        <line x1="327" y1="60" x2="390" y2="40" stroke="#8b5cf6" stroke-width="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="327" y1="100" x2="390" y2="100" stroke="#8b5cf6" stroke-width="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="327" y1="140" x2="390" y2="160" stroke="#8b5cf6" stroke-width="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Virtual focus (traced back) -->
        <line x1="327" y1="60" x2="265" y2="100" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
        <line x1="327" y1="140" x2="265" y2="100" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
        <circle cx="265" cy="100" r="4" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="265" y="125" fill="#ef4444" font-size="9" text-anchor="middle">Virtual F</text>
        
        <!-- Legend -->
        <rect x="10" y="170" width="15" height="3" fill="#f59e0b"/>
        <text x="30" y="175" fill="currentColor" font-size="9">Parallel rays</text>
        <rect x="100" y="170" width="15" height="3" fill="#22c55e"/>
        <text x="120" y="175" fill="currentColor" font-size="9">Converging</text>
        <rect x="190" y="170" width="15" height="3" fill="#8b5cf6"/>
        <text x="210" y="175" fill="currentColor" font-size="9">Diverging</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Convex lenses converge rays • Concave lenses diverge rays</p>
  </div>

  <div class="example-block">
    <h4>📚 Applications:</h4>
    <p>This allows lenses to be used in <strong>glasses, cameras, microscopes, projectors, and magnifying glasses</strong>.</p>
  </div>
</div>
      `,
      canonical_keywords: ["lens", "refraction", "converge", "diverge", "image", "magnified", "real", "virtual"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain what a lens does and how it forms an image.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["refract", "light", "converge", "diverge", "image"]
        }
      ]
    },
    {
      id: "4-6-2-5-lens-types",
      title: "4.6.2.5 – Types of Lenses",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Types of Lenses</h3>
  
  <div class="definition-block" style="border-left: 4px solid #3b82f6;">
    <h4>🔵 Convex Lens (Converging Lens)</h4>
    <ul>
      <li><strong>Thicker in the middle</strong>, thinner at the edges</li>
      <li>Makes parallel rays of light <strong>converge</strong> (come together)</li>
      <li>Creates a <strong>principal focus</strong>, where these rays meet</li>
      <li>The <strong>focal length</strong> is the distance from the centre of the lens to the principal focus</li>
      <li>A more strongly curved convex lens bends light more sharply → <strong>shorter focal length</strong></li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #ec4899; margin-top: 1rem;">
    <h4>🔴 Concave Lens (Diverging Lens)</h4>
    <ul>
      <li><strong>Thinner in the middle</strong>, thicker at the edges</li>
      <li>Makes parallel rays of light <strong>diverge</strong> (spread out)</li>
      <li>Rays appear to come from a <strong>virtual focus</strong> behind the lens</li>
      <li>Concave lenses <strong>always</strong> produce a <strong>virtual, upright, smaller</strong> image regardless of object position</li>
    </ul>
  </div>

  <!-- Lens Shapes Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Lens Shapes & Symbols</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="220" viewBox="0 0 450 220">
        <!-- Convex Lens -->
        <text x="112" y="25" fill="#3b82f6" font-size="14" text-anchor="middle" font-weight="bold">Convex (Converging)</text>
        
        <!-- Physical convex lens shape -->
        <ellipse cx="80" cy="110" rx="25" ry="60" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="3"/>
        <text x="80" y="185" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        
        <!-- Convex lens symbol -->
        <line x1="140" y1="50" x2="140" y2="170" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="140,50 130,60 150,60" fill="#3b82f6"/>
        <polygon points="140,170 130,160 150,160" fill="#3b82f6"/>
        <text x="140" y="195" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>
        
        <!-- Arrows showing thicker middle -->
        <path d="M65 80 L55 110 L65 140" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="45" y="112" fill="#22c55e" font-size="8" text-anchor="end">Thick</text>
        <text x="45" y="122" fill="#22c55e" font-size="8" text-anchor="end">middle</text>

        <!-- Concave Lens -->
        <text x="337" y="25" fill="#ec4899" font-size="14" text-anchor="middle" font-weight="bold">Concave (Diverging)</text>
        
        <!-- Physical concave lens shape -->
        <path d="M280 50 Q310 110 280 170 L320 170 Q290 110 320 50 Z" fill="hsl(var(--primary)/0.15)" stroke="#ec4899" stroke-width="3"/>
        <text x="300" y="185" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        
        <!-- Concave lens symbol -->
        <line x1="380" y1="50" x2="380" y2="170" stroke="#ec4899" stroke-width="3"/>
        <polygon points="380,50 370,60 390,60" fill="#ec4899" transform="rotate(180,380,55)"/>
        <polygon points="380,170 370,160 390,160" fill="#ec4899" transform="rotate(180,380,165)"/>
        <text x="380" y="195" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>
        
        <!-- Arrows showing thin middle -->
        <path d="M285 80 L295 110 L285 140" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="265" y="112" fill="#f59e0b" font-size="8" text-anchor="end">Thin</text>
        <text x="265" y="122" fill="#f59e0b" font-size="8" text-anchor="end">middle</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Convex Lens</th><th>Concave Lens</th></tr></thead>
    <tbody>
      <tr><td>Shape</td><td>Thicker in middle</td><td>Thinner in middle</td></tr>
      <tr><td>Effect on light</td><td>Converges rays</td><td>Diverges rays</td></tr>
      <tr><td>Focus type</td><td>Real focus</td><td>Virtual focus</td></tr>
      <tr><td>Image types possible</td><td>Real or virtual</td><td>Always virtual</td></tr>
      <tr><td>Uses</td><td>Magnifying glass, camera</td><td>Spectacles (short-sightedness)</td></tr>
    </tbody>
  </table>
</div>
      `,
      canonical_keywords: ["convex lens", "concave lens", "converging", "diverging", "principal focus", "focal length", "thicker", "thinner"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Describe the differences between a convex and concave lens in terms of shape and how they affect light.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["convex", "concave", "converge", "diverge", "thicker middle", "thinner middle"]
        }
      ]
    },
    {
      id: "4-6-2-5-focal-length",
      title: "4.6.2.5 – Principal Focus & Focal Length",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Principal Focus & Focal Length</h3>
  
  <div class="definition-block">
    <h4>🎯 Principal Focus (F):</h4>
    <ul>
      <li><strong>Convex lens:</strong> where parallel rays <strong>actually meet</strong></li>
      <li><strong>Concave lens:</strong> where rays <strong>appear to come from</strong> when traced back</li>
    </ul>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>📏 Focal Length (f):</h4>
    <ul>
      <li>Distance between the <strong>centre of the lens</strong> and the <strong>principal focus</strong></li>
      <li><strong>Shorter focal length → stronger bending</strong> of light</li>
      <li>Important in determining how large or small the image becomes</li>
    </ul>
  </div>

  <!-- Interactive Focal Length Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Principal Focus and Focal Length (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Principal axis -->
        <line x1="20" y1="100" x2="480" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        <text x="490" y="105" fill="currentColor" font-size="9">Principal axis</text>
        
        <!-- Convex lens -->
        <ellipse cx="150" cy="100" rx="10" ry="55" fill="hsl(var(--primary)/0.2)" stroke="#3b82f6" stroke-width="2"/>
        <text x="150" y="170" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Convex Lens</text>
        
        <!-- Parallel rays coming in -->
        <line x1="30" y1="55" x2="140" y2="55" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="30" y1="100" x2="140" y2="100" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="30" y1="145" x2="140" y2="145" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Rays converging to focus -->
        <line x1="160" y1="55" x2="230" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="160" y1="100" x2="230" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="160" y1="145" x2="230" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Principal focus point -->
        <circle cx="230" cy="100" r="6" fill="#ef4444">
          <animate attributeName="r" values="6;8;6" dur="1s" repeatCount="indefinite"/>
        </circle>
        <text x="230" y="130" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        <text x="230" y="145" fill="#ef4444" font-size="9" text-anchor="middle">(Principal Focus)</text>
        
        <!-- Focal length indicator -->
        <line x1="150" y1="70" x2="230" y2="70" stroke="#ec4899" stroke-width="2"/>
        <line x1="150" y1="65" x2="150" y2="75" stroke="#ec4899" stroke-width="2"/>
        <line x1="230" y1="65" x2="230" y2="75" stroke="#ec4899" stroke-width="2"/>
        <text x="190" y="62" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">f (Focal Length)</text>
        
        <!-- Centre of lens marker -->
        <circle cx="150" cy="100" r="3" fill="#3b82f6"/>
        <text x="150" y="185" fill="currentColor" font-size="9" text-anchor="middle">Centre (C)</text>
        
        <!-- Comparison: Stronger lens -->
        <text x="380" y="35" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">Stronger Lens</text>
        <text x="380" y="50" fill="currentColor" font-size="9" text-anchor="middle">(more curved)</text>
        <ellipse cx="380" cy="100" rx="12" ry="45" fill="hsl(var(--primary)/0.2)" stroke="#8b5cf6" stroke-width="2"/>
        
        <!-- Shorter focal length -->
        <line x1="310" y1="75" x2="370" y2="75" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="390" y1="75" x2="420" y2="100" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="310" y1="100" x2="370" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="390" y1="100" x2="420" y2="100" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="310" y1="125" x2="370" y2="125" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="390" y1="125" x2="420" y2="100" stroke="#22c55e" stroke-width="1.5"/>
        
        <circle cx="420" cy="100" r="5" fill="#ef4444"/>
        <text x="420" y="125" fill="#ef4444" font-size="9" text-anchor="middle">F</text>
        
        <line x1="380" y1="140" x2="420" y2="140" stroke="#ec4899" stroke-width="1.5"/>
        <text x="400" y="155" fill="#ec4899" font-size="9" text-anchor="middle">Shorter f</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);"><strong>More curved lens = shorter focal length = stronger bending</strong></p>
  </div>

  <div class="key-idea-block">
    <h4>💡 Understanding Focal Length:</h4>
    <p>Understanding focal length allows you to <strong>predict whether the image will be magnified or diminished</strong>. Lenses with shorter focal lengths produce more magnification for close objects.</p>
  </div>
</div>
      `,
      canonical_keywords: ["principal focus", "focal length", "F", "f", "converge", "diverge", "centre of lens"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Define focal length and explain how it relates to the strength of a lens.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["focal length", "distance", "principal focus", "shorter", "stronger"]
        }
      ]
    },
    {
      id: "4-6-2-5-real-virtual-images",
      title: "4.6.2.5 – Real and Virtual Images",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Real and Virtual Images</h3>
  
  <div class="definition-block" style="border-left: 4px solid #22c55e;">
    <h4>🟢 Real Image</h4>
    <ul>
      <li>Formed when light rays <strong>actually meet</strong> after passing through the lens</li>
      <li><strong>Can be projected</strong> onto a screen</li>
      <li>Always <strong>inverted</strong> compared to the object</li>
      <li>Formed by convex lenses when the object is placed <strong>beyond the focal length</strong></li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #f59e0b; margin-top: 1rem;">
    <h4>🟡 Virtual Image</h4>
    <ul>
      <li>Formed when rays <strong>do not meet</strong>, but appear to meet when traced backwards</li>
      <li><strong>Cannot be projected</strong> onto a screen</li>
      <li>Always <strong>upright</strong></li>
      <li>Formed by:
        <ul>
          <li>Concave lenses (always)</li>
          <li>Convex lenses when object is inside the focal length</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- Real vs Virtual Image Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Real vs Virtual Images (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="240" viewBox="0 0 500 240">
        <!-- REAL IMAGE SECTION -->
        <text x="125" y="20" fill="#22c55e" font-size="13" text-anchor="middle" font-weight="bold">REAL IMAGE</text>
        
        <!-- Principal axis -->
        <line x1="10" y1="110" x2="240" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Convex lens -->
        <ellipse cx="125" cy="110" rx="8" ry="45" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Object (arrow) -->
        <line x1="50" y1="110" x2="50" y2="65" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="50,60 45,70 55,70" fill="#f59e0b"/>
        <text x="50" y="130" fill="#f59e0b" font-size="9" text-anchor="middle">Object</text>
        
        <!-- Focus points -->
        <circle cx="160" cy="110" r="3" fill="#ef4444"/>
        <text x="160" y="125" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="90" cy="110" r="3" fill="#ef4444"/>
        <text x="90" y="125" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        
        <!-- Ray through centre -->
        <line x1="50" y1="65" x2="220" y2="155" stroke="#3b82f6" stroke-width="1.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Ray parallel then through F -->
        <line x1="50" y1="65" x2="125" y2="65" stroke="#ec4899" stroke-width="1.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="125" y1="65" x2="220" y2="155" stroke="#ec4899" stroke-width="1.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Real image (inverted arrow) -->
        <line x1="200" y1="110" x2="200" y2="155" stroke="#22c55e" stroke-width="3"/>
        <polygon points="200,160 195,150 205,150" fill="#22c55e"/>
        <text x="200" y="180" fill="#22c55e" font-size="9" text-anchor="middle">Real Image</text>
        <text x="200" y="195" fill="#22c55e" font-size="8" text-anchor="middle">(inverted)</text>
        
        <!-- Screen -->
        <rect x="215" y="85" width="8" height="80" fill="hsl(var(--muted))" stroke="currentColor" stroke-width="1"/>
        <text x="235" y="130" fill="currentColor" font-size="8">Screen</text>
        
        <!-- VIRTUAL IMAGE SECTION -->
        <text x="375" y="20" fill="#f59e0b" font-size="13" text-anchor="middle" font-weight="bold">VIRTUAL IMAGE</text>
        
        <!-- Principal axis -->
        <line x1="260" y1="110" x2="490" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Convex lens -->
        <ellipse cx="375" cy="110" rx="8" ry="45" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Object inside F (arrow) -->
        <line x1="355" y1="110" x2="355" y2="75" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="355,70 350,80 360,80" fill="#f59e0b"/>
        <text x="355" y="130" fill="#f59e0b" font-size="9" text-anchor="middle">Object</text>
        <text x="355" y="142" fill="#f59e0b" font-size="7" text-anchor="middle">(inside F)</text>
        
        <!-- Focus points -->
        <circle cx="410" cy="110" r="3" fill="#ef4444"/>
        <text x="410" y="125" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="340" cy="110" r="3" fill="#ef4444"/>
        <text x="340" y="125" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        
        <!-- Diverging rays -->
        <line x1="355" y1="75" x2="375" y2="75" stroke="#ec4899" stroke-width="1.5"/>
        <line x1="375" y1="75" x2="450" y2="60" stroke="#ec4899" stroke-width="1.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="355" y1="75" x2="450" y2="95" stroke="#3b82f6" stroke-width="1.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Traced back (virtual rays) -->
        <line x1="375" y1="75" x2="290" y2="35" stroke="#ec4899" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
        <line x1="375" y1="100" x2="290" y2="35" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
        
        <!-- Virtual image (upright, larger) -->
        <line x1="290" y1="110" x2="290" y2="35" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3"/>
        <polygon points="290,30 285,40 295,40" fill="#f59e0b" opacity="0.7"/>
        <text x="290" y="180" fill="#f59e0b" font-size="9" text-anchor="middle">Virtual Image</text>
        <text x="290" y="195" fill="#f59e0b" font-size="8" text-anchor="middle">(upright, magnified)</text>
        
        <!-- No screen possible indicator -->
        <text x="455" y="200" fill="#ef4444" font-size="8" text-anchor="middle">❌ Cannot project</text>
        <text x="455" y="212" fill="#ef4444" font-size="8" text-anchor="middle">on screen</text>
        
        <!-- Can project indicator -->
        <text x="200" y="212" fill="#22c55e" font-size="8" text-anchor="middle">✓ Can project</text>
        <text x="200" y="224" fill="#22c55e" font-size="8" text-anchor="middle">on screen</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Real Image</th><th>Virtual Image</th></tr></thead>
    <tbody>
      <tr><td>Rays</td><td>Actually meet</td><td>Appear to meet (traced back)</td></tr>
      <tr><td>Projection</td><td>Can be projected on screen</td><td>Cannot be projected</td></tr>
      <tr><td>Orientation</td><td>Inverted (upside down)</td><td>Upright (same way up)</td></tr>
      <tr><td>Formed by</td><td>Convex lens (object beyond F)</td><td>Concave lens OR convex (object inside F)</td></tr>
    </tbody>
  </table>
</div>
      `,
      canonical_keywords: ["real image", "virtual image", "inverted", "upright", "projected", "screen", "traced back"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain the difference between a real and virtual image.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["real", "rays meet", "projected", "inverted", "virtual", "appear to meet", "upright"]
        },
        {
          id: "p2",
          prompt_template: "State two ways a virtual image can be produced by lenses.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["concave lens", "convex", "inside focal length"]
        }
      ]
    },
    {
      id: "4-6-2-5-ray-diagrams-convex",
      title: "4.6.2.5 – Ray Diagrams: Convex Lens",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Ray Diagrams: Convex Lens</h3>
  
  <div class="key-idea-block">
    <h4>📐 Ray Diagrams:</h4>
    <p>Ray diagrams allow you to see exactly <strong>where the image forms</strong> and <strong>what its properties are</strong>.</p>
  </div>

  <div class="definition-block">
    <h4>Three Key Rays You Always Draw:</h4>
    <ol>
      <li><strong>Ray parallel to the principal axis</strong> → refracts through the principal focus (F)</li>
      <li><strong>Ray through the centre of the lens</strong> → passes straight through without bending</li>
      <li><strong>Ray through the focal point</strong> (before reaching the lens) → refracts parallel to the axis</li>
    </ol>
  </div>

  <!-- Ray Diagram Construction Guide -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>The Three Construction Rays (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Principal axis -->
        <line x1="20" y1="100" x2="480" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Lens -->
        <ellipse cx="200" cy="100" rx="10" ry="65" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- 2F and F markers -->
        <circle cx="100" cy="100" r="3" fill="#8b5cf6"/>
        <text x="100" y="120" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="150" cy="100" r="3" fill="#ef4444"/>
        <text x="150" y="120" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="250" cy="100" r="3" fill="#ef4444"/>
        <text x="250" y="120" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="300" cy="100" r="3" fill="#8b5cf6"/>
        <text x="300" y="120" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object -->
        <line x1="80" y1="100" x2="80" y2="50" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="80,45 75,55 85,55" fill="#f59e0b"/>
        
        <!-- Ray 1: Parallel then through F -->
        <line x1="80" y1="50" x2="200" y2="50" stroke="#22c55e" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="200" y1="50" x2="380" y2="155" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Ray 2: Through centre -->
        <line x1="80" y1="50" x2="380" y2="155" stroke="#3b82f6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Ray 3: Through F then parallel -->
        <line x1="80" y1="50" x2="150" y2="82" stroke="#ec4899" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="150" y1="82" x2="200" y2="100" stroke="#ec4899" stroke-width="2"/>
        <line x1="200" y1="100" x2="380" y2="155" stroke="#ec4899" stroke-width="2" stroke-dasharray="3,3"/>
        
        <!-- Image (where rays meet) -->
        <line x1="320" y1="100" x2="320" y2="155" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="320,160 315,150 325,150" fill="#f59e0b"/>
        <text x="320" y="180" fill="#f59e0b" font-size="9" text-anchor="middle">Image</text>
        
        <!-- Legend -->
        <rect x="360" y="20" width="130" height="70" fill="hsl(var(--muted)/0.5)" rx="5"/>
        <line x1="370" y1="35" x2="395" y2="35" stroke="#22c55e" stroke-width="2"/>
        <text x="400" y="38" fill="currentColor" font-size="8">Parallel → F</text>
        <line x1="370" y1="50" x2="395" y2="50" stroke="#3b82f6" stroke-width="2"/>
        <text x="400" y="53" fill="currentColor" font-size="8">Through centre</text>
        <line x1="370" y1="65" x2="395" y2="65" stroke="#ec4899" stroke-width="2"/>
        <text x="400" y="68" fill="currentColor" font-size="8">Through F → parallel</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block" style="margin-top: 1rem;">
    <h4>🎯 What Happens Depends on Object Position:</h4>
  </div>

  <!-- Object Beyond 2F -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #22c55e;">
    <h4>Object Beyond 2F (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="160" viewBox="0 0 450 160">
        <!-- Axis -->
        <line x1="20" y1="80" x2="430" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" opacity="0.3"/>
        <!-- Lens -->
        <ellipse cx="200" cy="80" rx="8" ry="50" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="2"/>
        <!-- Markers -->
        <circle cx="100" cy="80" r="2" fill="#8b5cf6"/>
        <text x="100" y="95" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <circle cx="150" cy="80" r="2" fill="#ef4444"/>
        <text x="150" y="95" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="250" cy="80" r="2" fill="#ef4444"/>
        <text x="250" y="95" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="300" cy="80" r="2" fill="#8b5cf6"/>
        <text x="300" y="95" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <!-- Object (beyond 2F) -->
        <line x1="50" y1="80" x2="50" y2="35" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="50,30 45,40 55,40" fill="#f59e0b"/>
        <text x="50" y="110" fill="#f59e0b" font-size="9" text-anchor="middle">Object</text>
        <!-- Rays -->
        <line x1="50" y1="35" x2="200" y2="35" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="200" y1="35" x2="280" y2="100" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="50" y1="35" x2="280" y2="100" stroke="#3b82f6" stroke-width="1.5"/>
        <!-- Image -->
        <line x1="280" y1="80" x2="280" y2="100" stroke="#22c55e" stroke-width="3"/>
        <polygon points="280,105 277,98 283,98" fill="#22c55e"/>
        <text x="280" y="125" fill="#22c55e" font-size="9" text-anchor="middle">Image</text>
        <!-- Properties -->
        <rect x="340" y="20" width="100" height="60" fill="hsl(var(--muted)/0.5)" rx="5"/>
        <text x="390" y="38" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="390" y="52" fill="#22c55e" font-size="8" text-anchor="middle">✓ Real</text>
        <text x="390" y="64" fill="#22c55e" font-size="8" text-anchor="middle">✓ Inverted</text>
        <text x="390" y="76" fill="#22c55e" font-size="8" text-anchor="middle">✓ Smaller</text>
      </svg>
    </div>
  </div>

  <!-- Object at 2F -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #3b82f6;">
    <h4>Object at 2F (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="160" viewBox="0 0 450 160">
        <!-- Axis -->
        <line x1="20" y1="80" x2="430" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" opacity="0.3"/>
        <!-- Lens -->
        <ellipse cx="200" cy="80" rx="8" ry="50" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="2"/>
        <!-- Markers -->
        <circle cx="100" cy="80" r="2" fill="#8b5cf6"/>
        <text x="100" y="95" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <circle cx="150" cy="80" r="2" fill="#ef4444"/>
        <text x="150" y="95" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="250" cy="80" r="2" fill="#ef4444"/>
        <text x="250" y="95" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="300" cy="80" r="2" fill="#8b5cf6"/>
        <text x="300" y="95" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <!-- Object (at 2F) -->
        <line x1="100" y1="80" x2="100" y2="35" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="100,30 95,40 105,40" fill="#f59e0b"/>
        <!-- Rays -->
        <line x1="100" y1="35" x2="200" y2="35" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="200" y1="35" x2="300" y2="125" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="100" y1="35" x2="300" y2="125" stroke="#3b82f6" stroke-width="1.5"/>
        <!-- Image (at 2F, same size) -->
        <line x1="300" y1="80" x2="300" y2="125" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="300,130 297,123 303,123" fill="#3b82f6"/>
        <!-- Properties -->
        <rect x="340" y="20" width="100" height="70" fill="hsl(var(--muted)/0.5)" rx="5"/>
        <text x="390" y="38" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="390" y="52" fill="#3b82f6" font-size="8" text-anchor="middle">✓ Real</text>
        <text x="390" y="64" fill="#3b82f6" font-size="8" text-anchor="middle">✓ Inverted</text>
        <text x="390" y="76" fill="#3b82f6" font-size="8" text-anchor="middle">✓ Same size</text>
        <text x="390" y="88" fill="#3b82f6" font-size="8" text-anchor="middle">✓ At 2F</text>
      </svg>
    </div>
  </div>

  <!-- Object Between F and 2F -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #ec4899;">
    <h4>Object Between F and 2F (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="160" viewBox="0 0 450 160">
        <!-- Axis -->
        <line x1="20" y1="80" x2="430" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" opacity="0.3"/>
        <!-- Lens -->
        <ellipse cx="200" cy="80" rx="8" ry="50" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="2"/>
        <!-- Markers -->
        <circle cx="100" cy="80" r="2" fill="#8b5cf6"/>
        <text x="100" y="95" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <circle cx="150" cy="80" r="2" fill="#ef4444"/>
        <text x="150" y="95" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="250" cy="80" r="2" fill="#ef4444"/>
        <text x="250" y="95" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="300" cy="80" r="2" fill="#8b5cf6"/>
        <text x="300" y="95" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <!-- Object (between F and 2F) -->
        <line x1="125" y1="80" x2="125" y2="45" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="125,40 120,50 130,50" fill="#f59e0b"/>
        <!-- Rays -->
        <line x1="125" y1="45" x2="200" y2="45" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="200" y1="45" x2="360" y2="135" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="125" y1="45" x2="360" y2="135" stroke="#3b82f6" stroke-width="1.5"/>
        <!-- Image (beyond 2F, magnified) -->
        <line x1="360" y1="80" x2="360" y2="135" stroke="#ec4899" stroke-width="3"/>
        <polygon points="360,140 357,133 363,133" fill="#ec4899"/>
        <!-- Properties -->
        <rect x="380" y="20" width="65" height="70" fill="hsl(var(--muted)/0.5)" rx="5"/>
        <text x="412" y="35" fill="currentColor" font-size="8" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="412" y="48" fill="#ec4899" font-size="7" text-anchor="middle">✓ Real</text>
        <text x="412" y="60" fill="#ec4899" font-size="7" text-anchor="middle">✓ Inverted</text>
        <text x="412" y="72" fill="#ec4899" font-size="7" text-anchor="middle">✓ Magnified</text>
        <text x="412" y="84" fill="#ec4899" font-size="7" text-anchor="middle">✓ Beyond 2F</text>
      </svg>
    </div>
  </div>

  <!-- Object Inside F (Magnifying Glass) -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #f59e0b;">
    <h4>Object Inside F - Magnifying Glass Effect (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="170" viewBox="0 0 450 170">
        <!-- Axis -->
        <line x1="20" y1="85" x2="430" y2="85" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" opacity="0.3"/>
        <!-- Lens -->
        <ellipse cx="250" cy="85" rx="8" ry="50" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="2"/>
        <!-- Markers -->
        <circle cx="150" cy="85" r="2" fill="#8b5cf6"/>
        <text x="150" y="100" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <circle cx="200" cy="85" r="2" fill="#ef4444"/>
        <text x="200" y="100" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="300" cy="85" r="2" fill="#ef4444"/>
        <text x="300" y="100" fill="#ef4444" font-size="8" text-anchor="middle">F</text>
        <circle cx="350" cy="85" r="2" fill="#8b5cf6"/>
        <text x="350" y="100" fill="#8b5cf6" font-size="8" text-anchor="middle">2F</text>
        <!-- Object (inside F) -->
        <line x1="225" y1="85" x2="225" y2="55" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="225,50 220,60 230,60" fill="#f59e0b"/>
        <text x="225" y="115" fill="#f59e0b" font-size="8" text-anchor="middle">Object</text>
        <!-- Diverging rays -->
        <line x1="225" y1="55" x2="250" y2="55" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="250" y1="55" x2="380" y2="35" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="225" y1="55" x2="380" y2="70" stroke="#3b82f6" stroke-width="1.5"/>
        <!-- Traced back (virtual image) -->
        <line x1="250" y1="55" x2="80" y2="10" stroke="#22c55e" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
        <line x1="250" y1="80" x2="80" y2="10" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
        <!-- Virtual image (upright, magnified) -->
        <line x1="80" y1="85" x2="80" y2="10" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>
        <polygon points="80,5 75,15 85,15" fill="#f59e0b" opacity="0.7"/>
        <text x="80" y="135" fill="#f59e0b" font-size="9" text-anchor="middle">Virtual Image</text>
        <text x="80" y="150" fill="#f59e0b" font-size="7" text-anchor="middle">(Magnified)</text>
        <!-- Magnifying glass icon -->
        <text x="380" y="130" fill="#f59e0b" font-size="10" text-anchor="middle">🔍 This is how</text>
        <text x="380" y="145" fill="#f59e0b" font-size="10" text-anchor="middle">magnifying glasses work!</text>
        <!-- Properties -->
        <rect x="340" y="10" width="90" height="65" fill="hsl(var(--muted)/0.5)" rx="5"/>
        <text x="385" y="25" fill="currentColor" font-size="8" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="385" y="38" fill="#f59e0b" font-size="7" text-anchor="middle">✓ Virtual</text>
        <text x="385" y="50" fill="#f59e0b" font-size="7" text-anchor="middle">✓ Upright</text>
        <text x="385" y="62" fill="#f59e0b" font-size="7" text-anchor="middle">✓ Magnified</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Object Position</th><th>Image Position</th><th>Image Properties</th></tr></thead>
    <tbody>
      <tr><td>Beyond 2F</td><td>Between F and 2F</td><td>Real, inverted, smaller</td></tr>
      <tr><td>At 2F</td><td>At 2F</td><td>Real, inverted, same size</td></tr>
      <tr><td>Between F and 2F</td><td>Beyond 2F</td><td>Real, inverted, magnified</td></tr>
      <tr><td>Inside F</td><td>Same side as object</td><td>Virtual, upright, magnified</td></tr>
    </tbody>
  </table>
</div>
      `,
      canonical_keywords: ["ray diagram", "convex lens", "2F", "F", "principal axis", "parallel", "centre", "focal point", "magnified", "inverted"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Describe the three rays used to construct a ray diagram for a convex lens.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["parallel", "through focus", "through centre", "straight"]
        },
        {
          id: "p2",
          prompt_template: "An object is placed between F and 2F of a convex lens. Describe the image formed.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["real", "inverted", "magnified", "beyond 2F"]
        },
        {
          id: "p3",
          prompt_template: "Explain how a magnifying glass works using your knowledge of convex lenses.",
          marks: 4,
          type: "short-answer",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["convex", "inside focal length", "virtual", "upright", "magnified"]
        }
      ]
    },
    {
      id: "4-6-2-5-ray-diagrams-concave",
      title: "4.6.2.5 – Ray Diagrams: Concave Lens",
      type: "content",
      study_group: 3,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Ray Diagrams: Concave Lens</h3>
  
  <div class="key-idea-block">
    <h4>📐 Concave Lens Behaviour:</h4>
    <p>Concave lenses behave <strong>much more simply</strong> than convex lenses. The image is <strong>always the same type</strong> regardless of object position.</p>
  </div>

  <div class="definition-block">
    <h4>Two Main Rays:</h4>
    <ol>
      <li><strong>A ray parallel to the axis</strong> → refracts as if coming from the virtual focus behind the lens</li>
      <li><strong>A ray through the centre</strong> → continues straight through</li>
    </ol>
  </div>

  <!-- Concave Lens Ray Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Concave Lens Ray Diagram (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Principal axis -->
        <line x1="20" y1="100" x2="480" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Concave lens -->
        <path d="M248 35 Q268 100 248 165 M278 35 Q258 100 278 165" fill="none" stroke="#ec4899" stroke-width="2"/>
        <line x1="248" y1="35" x2="278" y2="35" stroke="#ec4899" stroke-width="2"/>
        <line x1="248" y1="165" x2="278" y2="165" stroke="#ec4899" stroke-width="2"/>
        
        <!-- Focus markers -->
        <circle cx="195" cy="100" r="3" fill="#ef4444"/>
        <text x="195" y="120" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F (virtual)</text>
        <circle cx="330" cy="100" r="3" fill="#ef4444"/>
        <text x="330" y="120" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- Object -->
        <line x1="80" y1="100" x2="80" y2="50" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="80,45 75,55 85,55" fill="#f59e0b"/>
        <text x="80" y="130" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel then appears to come from F -->
        <line x1="80" y1="50" x2="248" y2="50" stroke="#22c55e" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="278" y1="50" x2="420" y2="20" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- Traced back to virtual F -->
        <line x1="278" y1="50" x2="195" y2="100" stroke="#22c55e" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
        
        <!-- Ray 2: Through centre -->
        <line x1="80" y1="50" x2="420" y2="135" stroke="#3b82f6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Virtual image (where traced rays appear to meet) -->
        <line x1="145" y1="100" x2="145" y2="70" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>
        <polygon points="145,65 140,75 150,75" fill="#f59e0b" opacity="0.7"/>
        <text x="145" y="150" fill="#f59e0b" font-size="9" text-anchor="middle">Virtual Image</text>
        <text x="145" y="165" fill="#f59e0b" font-size="8" text-anchor="middle">(upright, smaller)</text>
        
        <!-- Traced ray intersection -->
        <line x1="420" y1="135" x2="145" y2="70" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
        
        <!-- Eye position -->
        <circle cx="430" cy="60" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="430" cy="60" r="5" fill="currentColor"/>
        <text x="430" y="90" fill="currentColor" font-size="8" text-anchor="middle">Observer</text>
        
        <!-- Properties box -->
        <rect x="350" y="130" width="130" height="60" fill="hsl(var(--muted)/0.5)" rx="5"/>
        <text x="415" y="148" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Image Properties:</text>
        <text x="415" y="163" fill="#f59e0b" font-size="9" text-anchor="middle">✓ Virtual • ✓ Upright</text>
        <text x="415" y="178" fill="#f59e0b" font-size="9" text-anchor="middle">✓ Smaller (diminished)</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">The image appears on the <strong>same side</strong> as the object</p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #f59e0b;">
    <h4>🎯 Image Properties (Always the Same):</h4>
    <ul>
      <li><strong>Virtual</strong> - cannot be projected onto a screen</li>
      <li><strong>Upright</strong> - same orientation as the object</li>
      <li><strong>Smaller</strong> (diminished) - always reduced in size</li>
      <li>Appears on the <strong>same side of the lens as the object</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>📚 Application:</h4>
    <p>Concave lenses are used in <strong>spectacles for short-sighted people</strong>. They diverge light before it enters the eye, helping the image focus correctly on the retina.</p>
  </div>
</div>
      `,
      canonical_keywords: ["concave lens", "ray diagram", "virtual image", "upright", "diminished", "diverging", "virtual focus"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Describe the properties of an image formed by a concave lens.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["virtual", "upright", "smaller", "diminished"]
        },
        {
          id: "p2",
          prompt_template: "Draw and label a ray diagram showing how a concave lens forms an image.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["parallel ray", "through centre", "diverge", "virtual focus", "same side"]
        }
      ]
    },
    {
      id: "4-6-2-5-magnification",
      title: "4.6.2.5 – Magnification",
      type: "content",
      study_group: 3,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Magnification</h3>
  
  <div class="definition-block">
    <h4>📐 What is Magnification?</h4>
    <p>Magnification tells you <strong>how much bigger or smaller</strong> an image is compared to the object.</p>
  </div>

  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Magnification Equation:</h4>
    <p style="font-size: 2rem; font-weight: bold; color: hsl(var(--primary));">Magnification = Image Height / Object Height</p>
    <p style="font-size: 1rem; margin-top: 0.5rem; color: var(--muted-foreground);">No units — it is a <strong>ratio</strong></p>
  </div>

  <!-- Magnification Triangle Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Magnification Formula Triangle</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="280" height="200" viewBox="0 0 280 200">
        <!-- Triangle -->
        <polygon points="140,20 40,180 240,180" fill="none" stroke="currentColor" stroke-width="3"/>
        
        <!-- Dividing line -->
        <line x1="40" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="2"/>
        
        <!-- Labels -->
        <text x="140" y="70" fill="#22c55e" font-size="16" text-anchor="middle" font-weight="bold">Image Height</text>
        <text x="90" y="145" fill="#3b82f6" font-size="14" text-anchor="middle" font-weight="bold">M</text>
        <text x="190" y="145" fill="#ec4899" font-size="14" text-anchor="middle" font-weight="bold">Object</text>
        <text x="190" y="162" fill="#ec4899" font-size="14" text-anchor="middle" font-weight="bold">Height</text>
        
        <!-- Multiplication/Division symbols -->
        <text x="140" y="145" fill="currentColor" font-size="20" text-anchor="middle">×</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.9rem; color: var(--muted-foreground);">Cover what you want to find, then multiply or divide the remaining values</p>
  </div>

  <div class="key-facts-block">
    <h4>📊 Interpretation:</h4>
    <ul>
      <li><strong>Magnification > 1</strong> → image is <span style="color: #22c55e;">magnified</span> (larger)</li>
      <li><strong>Magnification = 1</strong> → image is <span style="color: #3b82f6;">same size</span></li>
      <li><strong>Magnification < 1</strong> → image is <span style="color: #ef4444;">diminished</span> (smaller)</li>
    </ul>
  </div>

  <!-- Visual Example -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Magnification Examples</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="180" viewBox="0 0 450 180">
        <!-- Example 1: M > 1 -->
        <rect x="10" y="10" width="130" height="160" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="75" y="30" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">M = 2 (magnified)</text>
        <line x1="35" y1="120" x2="35" y2="80" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="35,75 30,85 40,85" fill="#f59e0b"/>
        <text x="35" y="140" fill="#f59e0b" font-size="9" text-anchor="middle">Object: 2cm</text>
        <line x1="95" y1="120" x2="95" y2="40" stroke="#22c55e" stroke-width="4"/>
        <polygon points="95,35 90,45 100,45" fill="#22c55e"/>
        <text x="95" y="140" fill="#22c55e" font-size="9" text-anchor="middle">Image: 4cm</text>
        <text x="75" y="160" fill="currentColor" font-size="10" text-anchor="middle">4 ÷ 2 = 2</text>
        
        <!-- Example 2: M = 1 -->
        <rect x="160" y="10" width="130" height="160" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="225" y="30" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">M = 1 (same size)</text>
        <line x1="185" y1="120" x2="185" y2="70" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="185,65 180,75 190,75" fill="#f59e0b"/>
        <text x="185" y="140" fill="#f59e0b" font-size="9" text-anchor="middle">Object: 3cm</text>
        <line x1="265" y1="120" x2="265" y2="70" stroke="#3b82f6" stroke-width="4"/>
        <polygon points="265,65 260,75 270,75" fill="#3b82f6"/>
        <text x="265" y="140" fill="#3b82f6" font-size="9" text-anchor="middle">Image: 3cm</text>
        <text x="225" y="160" fill="currentColor" font-size="10" text-anchor="middle">3 ÷ 3 = 1</text>
        
        <!-- Example 3: M < 1 -->
        <rect x="310" y="10" width="130" height="160" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="375" y="30" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">M = 0.5 (diminished)</text>
        <line x1="335" y1="120" x2="335" y2="60" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="335,55 330,65 340,65" fill="#f59e0b"/>
        <text x="335" y="140" fill="#f59e0b" font-size="9" text-anchor="middle">Object: 4cm</text>
        <line x1="415" y1="120" x2="415" y2="90" stroke="#ef4444" stroke-width="4"/>
        <polygon points="415,85 410,95 420,95" fill="#ef4444"/>
        <text x="415" y="140" fill="#ef4444" font-size="9" text-anchor="middle">Image: 2cm</text>
        <text x="375" y="160" fill="currentColor" font-size="10" text-anchor="middle">2 ÷ 4 = 0.5</text>
      </svg>
    </div>
  </div>

  <div class="key-idea-block">
    <h4>💡 Why Magnification Works:</h4>
    <p>The lens changes the <strong>angles at which rays meet</strong>. These angles determine where the image forms and how large it appears.</p>
    <ul>
      <li>If the rays meet at a <strong>larger separation</strong> from the axis → image height is greater → <strong>magnified</strong></li>
      <li>If they meet <strong>closer together</strong> → image height is smaller → <strong>diminished</strong></li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📏 Important Notes:</h4>
    <ul>
      <li>Works for <strong>both convex and concave</strong> lenses</li>
      <li>Both heights must be measured in the <strong>same units</strong> (mm, cm, etc.)</li>
      <li>The answer has <strong>no units</strong> because it's a ratio</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: ["magnification", "image height", "object height", "ratio", "magnified", "diminished", "same size"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "State the equation for magnification.",
          marks: 1,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["image height", "object height", "ratio"]
        },
        {
          id: "p2",
          prompt_template: "An object is 2 cm tall and its image is 6 cm tall. Calculate the magnification.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["6 ÷ 2", "3", "magnification = 3"]
        },
        {
          id: "p3",
          prompt_template: "Explain what a magnification of 0.4 tells you about the image.",
          marks: 2,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["smaller", "diminished", "less than 1"]
        }
      ]
    },
    {
      id: "4-6-2-6-visible-spectrum",
      title: "4.6.2.6 – The Visible Spectrum",
      type: "content",
      study_group: 4,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – The Visible Spectrum</h3>
  
  <div class="definition-block">
    <h4>💡 Definition:</h4>
    <p>The <strong>visible light spectrum</strong> is the small part of the electromagnetic spectrum that our eyes can detect. Each colour of visible light has its own <strong>specific wavelength and frequency</strong>.</p>
  </div>

  <!-- Visible Spectrum Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>The Visible Light Spectrum</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="180" viewBox="0 0 500 180">
        <defs>
          <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ff0000"/>
            <stop offset="17%" style="stop-color:#ff7700"/>
            <stop offset="33%" style="stop-color:#ffff00"/>
            <stop offset="50%" style="stop-color:#00ff00"/>
            <stop offset="67%" style="stop-color:#0000ff"/>
            <stop offset="83%" style="stop-color:#4b0082"/>
            <stop offset="100%" style="stop-color:#9400d3"/>
          </linearGradient>
        </defs>
        
        <!-- Spectrum bar -->
        <rect x="30" y="60" width="440" height="50" fill="url(#spectrum)" rx="5"/>
        
        <!-- Wavelength arrow -->
        <line x1="30" y1="40" x2="470" y2="40" stroke="currentColor" stroke-width="2"/>
        <polygon points="470,40 460,35 460,45" fill="currentColor"/>
        <text x="250" y="30" fill="currentColor" font-size="11" text-anchor="middle">Wavelength decreases →</text>
        
        <!-- Colour labels -->
        <text x="50" y="135" fill="#ff0000" font-size="10" text-anchor="middle" font-weight="bold">Red</text>
        <text x="110" y="135" fill="#ff7700" font-size="10" text-anchor="middle" font-weight="bold">Orange</text>
        <text x="170" y="135" fill="#cccc00" font-size="10" text-anchor="middle" font-weight="bold">Yellow</text>
        <text x="230" y="135" fill="#00aa00" font-size="10" text-anchor="middle" font-weight="bold">Green</text>
        <text x="300" y="135" fill="#0000ff" font-size="10" text-anchor="middle" font-weight="bold">Blue</text>
        <text x="370" y="135" fill="#4b0082" font-size="10" text-anchor="middle" font-weight="bold">Indigo</text>
        <text x="440" y="135" fill="#9400d3" font-size="10" text-anchor="middle" font-weight="bold">Violet</text>
        
        <!-- Wavelength values -->
        <text x="50" y="150" fill="currentColor" font-size="8" text-anchor="middle">~700nm</text>
        <text x="440" y="150" fill="currentColor" font-size="8" text-anchor="middle">~400nm</text>
        
        <!-- Frequency arrow -->
        <line x1="30" y1="165" x2="470" y2="165" stroke="currentColor" stroke-width="2"/>
        <polygon points="470,165 460,160 460,170" fill="currentColor"/>
        <text x="250" y="178" fill="currentColor" font-size="11" text-anchor="middle">Frequency increases →</text>
        
        <!-- Energy indicator -->
        <text x="50" y="55" fill="#ff0000" font-size="9" text-anchor="middle">Lower</text>
        <text x="50" y="125" fill="#ff0000" font-size="9" text-anchor="middle">energy</text>
        <text x="440" y="55" fill="#9400d3" font-size="9" text-anchor="middle">Higher</text>
        <text x="440" y="125" fill="#9400d3" font-size="9" text-anchor="middle">energy</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);"><strong>ROY G. BIV</strong> - Red, Orange, Yellow, Green, Blue, Indigo, Violet</p>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Relationship:</h4>
    <p>As <strong>wavelength decreases</strong>, <strong>frequency increases</strong>.</p>
    <ul>
      <li><strong>Violet</strong> has the <strong>highest frequency</strong> (most energy)</li>
      <li><strong>Red</strong> has the <strong>lowest frequency</strong> (least energy)</li>
    </ul>
    <p>Understanding this helps explain how objects absorb or reflect specific colours.</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Colour</th><th>Wavelength (nm)</th><th>Frequency</th><th>Energy</th></tr></thead>
    <tbody>
      <tr style="background: rgba(255,0,0,0.1);"><td>Red</td><td>~700</td><td>Lowest</td><td>Lowest</td></tr>
      <tr style="background: rgba(255,119,0,0.1);"><td>Orange</td><td>~620</td><td>↓</td><td>↓</td></tr>
      <tr style="background: rgba(255,255,0,0.1);"><td>Yellow</td><td>~580</td><td>↓</td><td>↓</td></tr>
      <tr style="background: rgba(0,255,0,0.1);"><td>Green</td><td>~530</td><td>↓</td><td>↓</td></tr>
      <tr style="background: rgba(0,0,255,0.1);"><td>Blue</td><td>~470</td><td>↓</td><td>↓</td></tr>
      <tr style="background: rgba(75,0,130,0.1);"><td>Indigo</td><td>~450</td><td>↓</td><td>↓</td></tr>
      <tr style="background: rgba(148,0,211,0.1);"><td>Violet</td><td>~400</td><td>Highest</td><td>Highest</td></tr>
    </tbody>
  </table>
</div>
      `,
      canonical_keywords: ["visible spectrum", "wavelength", "frequency", "red", "violet", "ROY G BIV", "energy", "colour"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "State the order of colours in the visible spectrum from longest to shortest wavelength.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
        },
        {
          id: "p2",
          prompt_template: "Which colour of visible light has the highest frequency and energy?",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["violet", "highest frequency", "highest energy"]
        }
      ]
    },
    {
      id: "4-6-2-6-colour-filters",
      title: "4.6.2.6 – Colour Filters",
      type: "content",
      study_group: 4,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – How Colour Filters Work</h3>
  
  <div class="definition-block">
    <h4>🎨 Colour Filters:</h4>
    <p>Colour filters control which colours <strong>pass through</strong> and which are <strong>absorbed</strong>.</p>
  </div>

  <!-- Colour Filter Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>How Colour Filters Work (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- White light source -->
        <circle cx="50" cy="100" r="25" fill="#fff" stroke="#333" stroke-width="2"/>
        <text x="50" y="105" fill="#333" font-size="10" text-anchor="middle" font-weight="bold">White</text>
        <text x="50" y="145" fill="currentColor" font-size="9" text-anchor="middle">Light</text>
        
        <!-- Incoming white light rays (rainbow) -->
        <line x1="75" y1="85" x2="140" y2="85" stroke="#ff0000" stroke-width="2"/>
        <line x1="75" y1="93" x2="140" y2="93" stroke="#00ff00" stroke-width="2"/>
        <line x1="75" y1="100" x2="140" y2="100" stroke="#0000ff" stroke-width="2"/>
        <line x1="75" y1="107" x2="140" y2="107" stroke="#ffff00" stroke-width="2"/>
        <line x1="75" y1="115" x2="140" y2="115" stroke="#ff00ff" stroke-width="2"/>
        
        <!-- Red filter -->
        <rect x="140" y="50" width="20" height="100" fill="#ff0000" opacity="0.7" rx="3"/>
        <text x="150" y="40" fill="#ff0000" font-size="11" text-anchor="middle" font-weight="bold">Red Filter</text>
        
        <!-- Only red passes through -->
        <line x1="160" y1="85" x2="230" y2="85" stroke="#ff0000" stroke-width="3">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Absorbed colours (X marks) -->
        <text x="175" y="96" fill="white" font-size="12" font-weight="bold">✗</text>
        <text x="175" y="106" fill="white" font-size="12" font-weight="bold">✗</text>
        <text x="175" y="116" fill="white" font-size="12" font-weight="bold">✗</text>
        
        <!-- Eye seeing red -->
        <circle cx="250" cy="85" r="15" fill="#fff" stroke="#333" stroke-width="2"/>
        <circle cx="250" cy="85" r="5" fill="#ff0000"/>
        <text x="250" y="120" fill="#ff0000" font-size="10" text-anchor="middle" font-weight="bold">See RED</text>
        
        <!-- Second example: Blue filter -->
        <circle cx="320" cy="100" r="20" fill="#fff" stroke="#333" stroke-width="2"/>
        <text x="320" y="104" fill="#333" font-size="8" text-anchor="middle">White</text>
        
        <line x1="340" y1="90" x2="380" y2="90" stroke="#ff0000" stroke-width="1.5"/>
        <line x1="340" y1="100" x2="380" y2="100" stroke="#0000ff" stroke-width="1.5"/>
        <line x1="340" y1="110" x2="380" y2="110" stroke="#00ff00" stroke-width="1.5"/>
        
        <rect x="380" y="70" width="15" height="60" fill="#0000ff" opacity="0.7" rx="2"/>
        <text x="387" y="60" fill="#0000ff" font-size="10" text-anchor="middle" font-weight="bold">Blue</text>
        
        <line x1="395" y1="100" x2="450" y2="100" stroke="#0000ff" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <circle cx="465" cy="100" r="12" fill="#fff" stroke="#333" stroke-width="1.5"/>
        <circle cx="465" cy="100" r="4" fill="#0000ff"/>
        <text x="465" y="130" fill="#0000ff" font-size="9" text-anchor="middle" font-weight="bold">Blue</text>
        
        <!-- Key idea box -->
        <rect x="280" y="150" width="210" height="40" fill="hsl(var(--muted)/0.5)" rx="5"/>
        <text x="385" y="168" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Filters ABSORB, not add colour</text>
        <text x="385" y="182" fill="currentColor" font-size="9" text-anchor="middle">They remove wavelengths</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>How Different Filters Behave:</h4>
    <ul>
      <li>A <strong style="color:#ff0000;">red filter</strong> transmits red light only and absorbs all other colours</li>
      <li>A <strong style="color:#00aa00;">green filter</strong> transmits green light only</li>
      <li>A <strong style="color:#0000ff;">blue filter</strong> transmits blue light only</li>
      <li>A <strong style="color:#cccc00;">yellow filter</strong> transmits red + green wavelengths (because yellow = red + green light)</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Idea:</h4>
    <p>Filters <strong>don't add colour</strong> — they <strong>remove certain wavelengths by absorbing them</strong>, allowing only selected wavelengths to pass.</p>
    <p>So if you shine <strong>white light through a red filter</strong>, the output becomes <strong>red</strong> because all non-red wavelengths were absorbed.</p>
  </div>
</div>
      `,
      canonical_keywords: ["colour filter", "absorb", "transmit", "wavelength", "red filter", "green filter", "blue filter"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain how a red filter produces red light from white light.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["absorbs", "other colours", "transmits", "red", "wavelength"]
        }
      ]
    },
    {
      id: "4-6-2-6-object-colour",
      title: "4.6.2.6 – Why Objects Have Colour",
      type: "content",
      study_group: 5,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Why Objects Have Colour</h3>
  
  <div class="definition-block">
    <h4>🎨 Object Colour:</h4>
    <p>An object's colour depends on which wavelengths it <strong>reflects</strong> and which it <strong>absorbs</strong>.</p>
  </div>

  <!-- Object Colour Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Why a Red Apple Looks Red (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <!-- Sun/white light -->
        <circle cx="200" cy="20" r="18" fill="#ffd700"/>
        <text x="200" y="8" fill="#333" font-size="8" text-anchor="middle">White light</text>
        
        <!-- Rainbow rays coming down -->
        <line x1="185" y1="38" x2="165" y2="90" stroke="#ff0000" stroke-width="2"/>
        <line x1="195" y1="38" x2="185" y2="90" stroke="#00ff00" stroke-width="2"/>
        <line x1="205" y1="38" x2="205" y2="90" stroke="#0000ff" stroke-width="2"/>
        <line x1="215" y1="38" x2="225" y2="90" stroke="#ffff00" stroke-width="2"/>
        
        <!-- Apple (red object) -->
        <ellipse cx="200" cy="120" rx="50" ry="35" fill="#cc0000"/>
        <path d="M200 85 Q210 70 220 85" fill="#228b22"/>
        
        <!-- Absorbed rays (going into apple) -->
        <text x="145" y="105" fill="#00ff00" font-size="10">✗ absorbed</text>
        <text x="230" y="105" fill="#0000ff" font-size="10">✗ absorbed</text>
        <text x="245" y="115" fill="#ffff00" font-size="10">✗</text>
        
        <!-- Reflected red ray -->
        <line x1="165" y1="100" x2="80" y2="160" stroke="#ff0000" stroke-width="3">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="235" y1="100" x2="320" y2="160" stroke="#ff0000" stroke-width="3">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Eyes -->
        <circle cx="70" cy="170" r="12" fill="#fff" stroke="#333" stroke-width="2"/>
        <circle cx="70" cy="170" r="4" fill="#333"/>
        <circle cx="330" cy="170" r="12" fill="#fff" stroke="#333" stroke-width="2"/>
        <circle cx="330" cy="170" r="4" fill="#333"/>
        
        <!-- Labels -->
        <text x="200" y="175" fill="#ff0000" font-size="11" text-anchor="middle" font-weight="bold">Only RED reflected</text>
        <text x="200" y="192" fill="currentColor" font-size="10" text-anchor="middle">→ Apple appears RED</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>✔ Opaque Objects (objects you cannot see through):</h4>
    <ul>
      <li>They <strong>absorb</strong> some wavelengths</li>
      <li>They <strong>reflect</strong> the wavelengths you see</li>
    </ul>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Object Colour</th><th>Reflects</th><th>Absorbs</th></tr></thead>
    <tbody>
      <tr style="background: rgba(255,0,0,0.1);"><td>Red object</td><td>Red</td><td>All other colours</td></tr>
      <tr style="background: rgba(0,255,0,0.1);"><td>Green object</td><td>Green</td><td>All other colours</td></tr>
      <tr style="background: rgba(0,0,255,0.1);"><td>Blue object</td><td>Blue</td><td>All other colours</td></tr>
      <tr style="background: rgba(255,255,255,0.3);"><td>White object</td><td>All colours</td><td>None</td></tr>
      <tr style="background: rgba(0,0,0,0.1);"><td>Black object</td><td>None (very little)</td><td>All colours</td></tr>
    </tbody>
  </table>

  <div class="key-idea-block">
    <h4>🧠 Important Rule:</h4>
    <p>The colour you see is determined by the <strong>wavelengths that are reflected</strong> to your eyes. The absorbed wavelengths are converted to <strong>heat energy</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Transparent, Translucent, and Opaque Objects</h3>
  
  <div class="definition-block" style="border-left: 4px solid #3b82f6;">
    <h4>🔵 Transparent Objects:</h4>
    <ul>
      <li>Transmit <strong>most</strong> of the light that hits them</li>
      <li>Allow you to see <strong>clearly</strong> through them</li>
      <li>Example: clear glass</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #8b5cf6; margin-top: 1rem;">
    <h4>🔷 Translucent Objects:</h4>
    <ul>
      <li>Transmit <strong>some</strong> light</li>
      <li><strong>Scatter</strong> the rest</li>
      <li>You can see shapes but not clear images</li>
      <li>Example: frosted glass</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #1f2937; margin-top: 1rem;">
    <h4>⚫ Opaque Objects:</h4>
    <ul>
      <li>Transmit <strong>no</strong> light</li>
      <li>Either <strong>reflect or absorb</strong> all incoming wavelengths</li>
      <li>Example: wood, metal, book covers</li>
    </ul>
  </div>

  <!-- Transparency Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Light Transmission Comparison</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="150" viewBox="0 0 450 150">
        <!-- Transparent -->
        <rect x="20" y="20" width="120" height="100" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="80" y="40" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">Transparent</text>
        <rect x="55" y="55" width="50" height="40" fill="rgba(135,206,250,0.3)" stroke="#3b82f6" stroke-width="2"/>
        <line x1="45" y1="75" x2="115" y2="75" stroke="#f59e0b" stroke-width="2"/>
        <text x="80" y="108" fill="currentColor" font-size="9" text-anchor="middle">All light passes</text>
        
        <!-- Translucent -->
        <rect x="165" y="20" width="120" height="100" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="225" y="40" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">Translucent</text>
        <rect x="200" y="55" width="50" height="40" fill="rgba(200,200,200,0.7)" stroke="#8b5cf6" stroke-width="2"/>
        <line x1="190" y1="75" x2="210" y2="75" stroke="#f59e0b" stroke-width="2"/>
        <line x1="210" y1="75" x2="225" y2="65" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
        <line x1="210" y1="75" x2="225" y2="85" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
        <line x1="230" y1="70" x2="260" y2="70" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
        <text x="225" y="108" fill="currentColor" font-size="9" text-anchor="middle">Some scatters</text>
        
        <!-- Opaque -->
        <rect x="310" y="20" width="120" height="100" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="370" y="40" fill="#1f2937" font-size="11" text-anchor="middle" font-weight="bold">Opaque</text>
        <rect x="345" y="55" width="50" height="40" fill="#333" stroke="#1f2937" stroke-width="2"/>
        <line x1="335" y1="75" x2="355" y2="75" stroke="#f59e0b" stroke-width="2"/>
        <line x1="355" y1="75" x2="335" y2="60" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="345" y="55" fill="#f59e0b" font-size="10">↩</text>
        <text x="370" y="108" fill="currentColor" font-size="9" text-anchor="middle">None passes</text>
      </svg>
    </div>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Point:</h4>
    <p>This classification affects how objects appear under different lighting conditions.</p>
  </div>
</div>
      `,
      canonical_keywords: ["object colour", "reflect", "absorb", "transparent", "translucent", "opaque", "wavelength"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain why a green leaf appears green in white light.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["reflects", "green", "absorbs", "other colours"]
        },
        {
          id: "p2",
          prompt_template: "Explain the difference between transparent, translucent and opaque materials.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["transparent", "all light", "translucent", "some", "scatter", "opaque", "none"]
        }
      ]
    },
    {
      id: "4-6-2-6-filters-and-objects",
      title: "4.6.2.6 – Filters & Object Appearance",
      type: "content",
      study_group: 5,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – How Filters Affect the Appearance of Objects</h3>
  
  <div class="key-idea-block">
    <h4>🎯 Understanding Filter + Object Combinations:</h4>
    <p>The colour you see depends on:</p>
    <ol>
      <li>The colour of the <strong>object</strong> (what it reflects)</li>
      <li>Which wavelengths the <strong>filter allows</strong> to reach it</li>
    </ol>
  </div>

  <!-- Filter + Object Examples -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Filter + Object Combinations (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Example 1: Red object + Red filter = RED -->
        <rect x="10" y="10" width="150" height="85" fill="hsl(var(--muted)/0.3)" rx="5"/>
        <text x="85" y="28" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Red object + Red filter</text>
        <circle cx="35" cy="55" r="10" fill="#fff" stroke="#333" stroke-width="1"/>
        <rect x="55" y="45" width="8" height="20" fill="#ff0000" opacity="0.7"/>
        <circle cx="85" cy="55" r="12" fill="#ff0000"/>
        <text x="85" y="85" fill="#ff0000" font-size="11" text-anchor="middle" font-weight="bold">= RED ✓</text>
        
        <!-- Example 2: Blue object + Red filter = BLACK -->
        <rect x="175" y="10" width="150" height="85" fill="hsl(var(--muted)/0.3)" rx="5"/>
        <text x="250" y="28" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Blue object + Red filter</text>
        <circle cx="200" cy="55" r="10" fill="#fff" stroke="#333" stroke-width="1"/>
        <rect x="220" y="45" width="8" height="20" fill="#ff0000" opacity="0.7"/>
        <circle cx="255" cy="55" r="12" fill="#0000ff"/>
        <line x1="235" y1="55" x2="250" y2="55" stroke="#ff0000" stroke-width="2"/>
        <text x="265" y="52" fill="#333" font-size="14">✗</text>
        <text x="250" y="85" fill="#333" font-size="11" text-anchor="middle" font-weight="bold">= BLACK</text>
        
        <!-- Example 3: Green object + White light = GREEN -->
        <rect x="340" y="10" width="150" height="85" fill="hsl(var(--muted)/0.3)" rx="5"/>
        <text x="415" y="28" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Green object + White light</text>
        <circle cx="365" cy="55" r="10" fill="#fff" stroke="#333" stroke-width="1"/>
        <text x="365" y="58" fill="#333" font-size="6" text-anchor="middle">W</text>
        <circle cx="420" cy="55" r="12" fill="#00aa00"/>
        <text x="415" y="85" fill="#00aa00" font-size="11" text-anchor="middle" font-weight="bold">= GREEN ✓</text>
        
        <!-- Example 4: Yellow object + Blue filter = BLACK -->
        <rect x="10" y="105" width="150" height="85" fill="hsl(var(--muted)/0.3)" rx="5"/>
        <text x="85" y="123" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Yellow obj + Blue filter</text>
        <circle cx="35" cy="150" r="10" fill="#fff" stroke="#333" stroke-width="1"/>
        <rect x="55" y="140" width="8" height="20" fill="#0000ff" opacity="0.7"/>
        <circle cx="85" cy="150" r="12" fill="#ffcc00"/>
        <text x="105" y="147" fill="#333" font-size="14">✗</text>
        <text x="85" y="180" fill="#333" font-size="11" text-anchor="middle" font-weight="bold">= BLACK/DARK</text>
        
        <!-- Explanation box -->
        <rect x="175" y="105" width="315" height="85" fill="hsl(var(--primary)/0.1)" rx="5"/>
        <text x="332" y="125" fill="hsl(var(--primary))" font-size="11" text-anchor="middle" font-weight="bold">🧠 Why does this happen?</text>
        <text x="332" y="145" fill="currentColor" font-size="9" text-anchor="middle">Blue object → reflects BLUE light only</text>
        <text x="332" y="160" fill="currentColor" font-size="9" text-anchor="middle">Red filter → blocks ALL blue wavelengths</text>
        <text x="332" y="175" fill="currentColor" font-size="9" text-anchor="middle">No light reaches your eyes → appears BLACK</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Object</th><th>Filter</th><th>Appearance</th><th>Reason</th></tr></thead>
    <tbody>
      <tr><td style="color:#ff0000;">Red object</td><td style="color:#ff0000;">Red filter</td><td style="color:#ff0000;">RED</td><td>Filter allows red; object reflects red</td></tr>
      <tr><td style="color:#0000ff;">Blue object</td><td style="color:#ff0000;">Red filter</td><td>BLACK</td><td>Filter blocks blue; object can't reflect red</td></tr>
      <tr><td style="color:#00aa00;">Green object</td><td>White light</td><td style="color:#00aa00;">GREEN</td><td>Object reflects green wavelengths</td></tr>
      <tr><td style="color:#ccaa00;">Yellow object</td><td style="color:#0000ff;">Blue filter</td><td>BLACK</td><td>Yellow reflects red+green; filter blocks both</td></tr>
    </tbody>
  </table>

  <div class="key-idea-block">
    <h4>💡 Important Understanding:</h4>
    <p>The colour you see depends on <strong>both</strong>:</p>
    <ol>
      <li>What wavelengths the <strong>filter allows</strong> to pass</li>
      <li>What wavelengths the <strong>object reflects</strong></li>
    </ol>
    <p>If there's no overlap between these, the object appears <strong>black</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Differential Absorption, Transmission, and Reflection</h3>
  
  <div class="definition-block">
    <h4>Objects interact with light in three ways:</h4>
    <ol>
      <li><strong>Absorption</strong> - The surface takes in specific wavelengths → converts them into heat. Black surfaces absorb the most energy.</li>
      <li><strong>Transmission</strong> - Light passes through the material (as in transparent or translucent objects).</li>
      <li><strong>Reflection</strong> - Light bounces back from the surface.</li>
    </ol>
  </div>

  <div class="key-idea-block">
    <h4>🎨 How This Links to Colour:</h4>
    <p>The balance of <strong>absorption, transmission, and reflection</strong> determines what colour we perceive.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Why an Opaque Object Has a Particular Colour</h3>
  
  <div class="key-facts-block">
    <h4>The Process:</h4>
    <ol>
      <li><strong>White light</strong> (a mix of all colours) hits the object</li>
      <li>The object's surface <strong>absorbs some wavelengths</strong></li>
      <li>The wavelengths that are <strong>not absorbed are reflected</strong></li>
      <li>The reflected wavelengths enter your eyes → your brain interprets them as the object's colour</li>
    </ol>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Object Colour</th><th>Reflects</th><th>Absorbs</th></tr></thead>
    <tbody>
      <tr style="background: rgba(128,0,128,0.1);"><td>Purple</td><td>Red + Blue</td><td>Green, Yellow, Orange</td></tr>
      <tr style="background: rgba(0,255,255,0.1);"><td>Cyan</td><td>Green + Blue</td><td>Red, Yellow, Orange</td></tr>
      <tr style="background: rgba(255,0,255,0.1);"><td>Magenta</td><td>Red + Blue</td><td>Green, Yellow</td></tr>
    </tbody>
  </table>

  <div class="key-idea-block">
    <h4>🧠 Key Point:</h4>
    <p>Your brain interprets the <strong>mixture of reflected wavelengths</strong> as the object's final colour.</p>
  </div>
</div>
      `,
      canonical_keywords: ["filter", "object colour", "absorb", "reflect", "transmit", "black", "appearance", "wavelength"],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A blue object is viewed through a red filter. Explain why it appears black.",
          marks: 4,
          type: "short-answer",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["blue reflects blue", "red filter blocks blue", "no light", "black"]
        },
        {
          id: "p2",
          prompt_template: "Explain the three ways objects can interact with light.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["absorption", "transmission", "reflection", "heat", "pass through"]
        }
      ]
    }
  ]
};
