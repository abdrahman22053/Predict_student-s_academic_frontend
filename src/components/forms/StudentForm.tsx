import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Loader2 } from 'lucide-react'
import type { StudentData } from '@/types/student'

interface StudentFormProps {
  onSubmit: (data: StudentData) => void
  isLoading: boolean
}

export function StudentForm({ onSubmit, isLoading }: StudentFormProps) {
  const { t } = useTranslation()

  const [formData, setFormData] = useState<StudentData>({
    school: 'GP',
    sex: 'F',
    age: 17,
    address: 'U',
    famsize: 'GT3',
    Pstatus: 'T',
    Medu: 3,
    Fedu: 3,
    Mjob: 'services',
    Fjob: 'other',
    reason: 'course',
    guardian: 'mother',
    traveltime: 1,
    studytime: 2,
    failures: 0,
    schoolsup: 'no',
    famsup: 'yes',
    paid: 'no',
    activities: 'yes',
    nursery: 'yes',
    higher: 'yes',
    internet: 'yes',
    romantic: 'no',
    famrel: 4,
    freetime: 3,
    goout: 3,
    Dalc: 1,
    Walc: 2,
    health: 5,
    absences: 2,
    G1: 12,
    G2: 13,
  })

  const updateField = (field: keyof StudentData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('form.title')}</CardTitle>
          <CardDescription>{t('app.subtitle')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" defaultValue={['identity', 'parents', 'school', 'habits', 'grades']} className="w-full">
            {/* Identity Section */}
            <AccordionItem value="identity">
              <AccordionTrigger className="text-lg font-semibold">
                {t('form.sections.identity')}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* School */}
                  <div className="space-y-2">
                    <Label htmlFor="school">{t('fields.school')}</Label>
                    <Select value={formData.school} onValueChange={(v) => updateField('school', v)}>
                      <SelectTrigger id="school">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GP">{t('fields.school_GP')}</SelectItem>
                        <SelectItem value="MS">{t('fields.school_MS')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sex */}
                  <div className="space-y-2">
                    <Label htmlFor="sex">{t('fields.sex')}</Label>
                    <Select value={formData.sex} onValueChange={(v) => updateField('sex', v)}>
                      <SelectTrigger id="sex">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="M">{t('fields.sex_M')}</SelectItem>
                        <SelectItem value="F">{t('fields.sex_F')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <Label htmlFor="age">{t('fields.age')}</Label>
                    <Input
                      id="age"
                      type="number"
                      min="10"
                      max="30"
                      value={formData.age}
                      onChange={(e) => updateField('age', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">{t('fields.address')}</Label>
                    <Select value={formData.address} onValueChange={(v) => updateField('address', v)}>
                      <SelectTrigger id="address">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="U">{t('fields.address_U')}</SelectItem>
                        <SelectItem value="R">{t('fields.address_R')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Family Size */}
                  <div className="space-y-2">
                    <Label htmlFor="famsize">{t('fields.famsize')}</Label>
                    <Select value={formData.famsize} onValueChange={(v) => updateField('famsize', v)}>
                      <SelectTrigger id="famsize">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LE3">{t('fields.famsize_LE3')}</SelectItem>
                        <SelectItem value="GT3">{t('fields.famsize_GT3')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Parent Status */}
                  <div className="space-y-2">
                    <Label htmlFor="Pstatus">{t('fields.Pstatus')}</Label>
                    <Select value={formData.Pstatus} onValueChange={(v) => updateField('Pstatus', v)}>
                      <SelectTrigger id="Pstatus">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="T">{t('fields.Pstatus_T')}</SelectItem>
                        <SelectItem value="A">{t('fields.Pstatus_A')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Guardian */}
                  <div className="space-y-2">
                    <Label htmlFor="guardian">{t('fields.guardian')}</Label>
                    <Select value={formData.guardian} onValueChange={(v) => updateField('guardian', v)}>
                      <SelectTrigger id="guardian">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mother">{t('fields.guardian_mother')}</SelectItem>
                        <SelectItem value="father">{t('fields.guardian_father')}</SelectItem>
                        <SelectItem value="other">{t('fields.guardian_other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Reason */}
                  <div className="space-y-2">
                    <Label htmlFor="reason">{t('fields.reason')}</Label>
                    <Select value={formData.reason} onValueChange={(v) => updateField('reason', v)}>
                      <SelectTrigger id="reason">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">{t('fields.reason_home')}</SelectItem>
                        <SelectItem value="reputation">{t('fields.reason_reputation')}</SelectItem>
                        <SelectItem value="course">{t('fields.reason_course')}</SelectItem>
                        <SelectItem value="other">{t('fields.reason_other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Parents Section */}
            <AccordionItem value="parents">
              <AccordionTrigger className="text-lg font-semibold">
                {t('form.sections.parents')}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* Mother Education */}
                  <div className="space-y-2">
                    <Label htmlFor="Medu">{t('fields.Medu')}</Label>
                    <Select value={String(formData.Medu)} onValueChange={(v) => updateField('Medu', parseInt(v))}>
                      <SelectTrigger id="Medu">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">{t('fields.edu_0')}</SelectItem>
                        <SelectItem value="1">{t('fields.edu_1')}</SelectItem>
                        <SelectItem value="2">{t('fields.edu_2')}</SelectItem>
                        <SelectItem value="3">{t('fields.edu_3')}</SelectItem>
                        <SelectItem value="4">{t('fields.edu_4')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Father Education */}
                  <div className="space-y-2">
                    <Label htmlFor="Fedu">{t('fields.Fedu')}</Label>
                    <Select value={String(formData.Fedu)} onValueChange={(v) => updateField('Fedu', parseInt(v))}>
                      <SelectTrigger id="Fedu">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">{t('fields.edu_0')}</SelectItem>
                        <SelectItem value="1">{t('fields.edu_1')}</SelectItem>
                        <SelectItem value="2">{t('fields.edu_2')}</SelectItem>
                        <SelectItem value="3">{t('fields.edu_3')}</SelectItem>
                        <SelectItem value="4">{t('fields.edu_4')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mother Job */}
                  <div className="space-y-2">
                    <Label htmlFor="Mjob">{t('fields.Mjob')}</Label>
                    <Select value={formData.Mjob} onValueChange={(v) => updateField('Mjob', v)}>
                      <SelectTrigger id="Mjob">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">{t('fields.job_teacher')}</SelectItem>
                        <SelectItem value="health">{t('fields.job_health')}</SelectItem>
                        <SelectItem value="services">{t('fields.job_services')}</SelectItem>
                        <SelectItem value="at_home">{t('fields.job_at_home')}</SelectItem>
                        <SelectItem value="other">{t('fields.job_other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Father Job */}
                  <div className="space-y-2">
                    <Label htmlFor="Fjob">{t('fields.Fjob')}</Label>
                    <Select value={formData.Fjob} onValueChange={(v) => updateField('Fjob', v)}>
                      <SelectTrigger id="Fjob">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">{t('fields.job_teacher')}</SelectItem>
                        <SelectItem value="health">{t('fields.job_health')}</SelectItem>
                        <SelectItem value="services">{t('fields.job_services')}</SelectItem>
                        <SelectItem value="at_home">{t('fields.job_at_home')}</SelectItem>
                        <SelectItem value="other">{t('fields.job_other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Family Support */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="famsup">{t('fields.famsup')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="famsup"
                          checked={formData.famsup === 'yes'}
                          onCheckedChange={(checked) => updateField('famsup', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* School Section */}
            <AccordionItem value="school">
              <AccordionTrigger className="text-lg font-semibold">
                {t('form.sections.school')}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* Travel Time */}
                  <div className="space-y-2">
                    <Label htmlFor="traveltime">{t('fields.traveltime')}</Label>
                    <Select value={String(formData.traveltime)} onValueChange={(v) => updateField('traveltime', parseInt(v))}>
                      <SelectTrigger id="traveltime">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">{t('fields.traveltime_1')}</SelectItem>
                        <SelectItem value="2">{t('fields.traveltime_2')}</SelectItem>
                        <SelectItem value="3">{t('fields.traveltime_3')}</SelectItem>
                        <SelectItem value="4">{t('fields.traveltime_4')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Study Time */}
                  <div className="space-y-2">
                    <Label htmlFor="studytime">{t('fields.studytime')}</Label>
                    <Select value={String(formData.studytime)} onValueChange={(v) => updateField('studytime', parseInt(v))}>
                      <SelectTrigger id="studytime">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">{t('fields.studytime_1')}</SelectItem>
                        <SelectItem value="2">{t('fields.studytime_2')}</SelectItem>
                        <SelectItem value="3">{t('fields.studytime_3')}</SelectItem>
                        <SelectItem value="4">{t('fields.studytime_4')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Failures */}
                  <div className="space-y-2">
                    <Label htmlFor="failures">{t('fields.failures')}</Label>
                    <Input
                      id="failures"
                      type="number"
                      min="0"
                      max="4"
                      value={formData.failures}
                      onChange={(e) => updateField('failures', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* School Support */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="schoolsup">{t('fields.schoolsup')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="schoolsup"
                          checked={formData.schoolsup === 'yes'}
                          onCheckedChange={(checked) => updateField('schoolsup', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Paid Classes */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="paid">{t('fields.paid')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="paid"
                          checked={formData.paid === 'yes'}
                          onCheckedChange={(checked) => updateField('paid', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="activities">{t('fields.activities')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="activities"
                          checked={formData.activities === 'yes'}
                          onCheckedChange={(checked) => updateField('activities', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Nursery */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="nursery">{t('fields.nursery')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="nursery"
                          checked={formData.nursery === 'yes'}
                          onCheckedChange={(checked) => updateField('nursery', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Higher Education */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="higher">{t('fields.higher')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="higher"
                          checked={formData.higher === 'yes'}
                          onCheckedChange={(checked) => updateField('higher', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Internet */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="internet">{t('fields.internet')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="internet"
                          checked={formData.internet === 'yes'}
                          onCheckedChange={(checked) => updateField('internet', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Romantic */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="romantic">{t('fields.romantic')}</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t('fields.no')}</span>
                        <Switch
                          id="romantic"
                          checked={formData.romantic === 'yes'}
                          onCheckedChange={(checked) => updateField('romantic', checked ? 'yes' : 'no')}
                        />
                        <span className="text-sm text-muted-foreground">{t('fields.yes')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Habits Section */}
            <AccordionItem value="habits">
              <AccordionTrigger className="text-lg font-semibold">
                {t('form.sections.habits')}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* Family Relations */}
                  <div className="space-y-2">
                    <Label htmlFor="famrel">{t('fields.famrel')} (1-5)</Label>
                    <Input
                      id="famrel"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.famrel}
                      onChange={(e) => updateField('famrel', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* Free Time */}
                  <div className="space-y-2">
                    <Label htmlFor="freetime">{t('fields.freetime')} (1-5)</Label>
                    <Input
                      id="freetime"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.freetime}
                      onChange={(e) => updateField('freetime', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* Go Out */}
                  <div className="space-y-2">
                    <Label htmlFor="goout">{t('fields.goout')} (1-5)</Label>
                    <Input
                      id="goout"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.goout}
                      onChange={(e) => updateField('goout', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* Dalc */}
                  <div className="space-y-2">
                    <Label htmlFor="Dalc">{t('fields.Dalc')} (1-5)</Label>
                    <Input
                      id="Dalc"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.Dalc}
                      onChange={(e) => updateField('Dalc', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* Walc */}
                  <div className="space-y-2">
                    <Label htmlFor="Walc">{t('fields.Walc')} (1-5)</Label>
                    <Input
                      id="Walc"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.Walc}
                      onChange={(e) => updateField('Walc', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* Health */}
                  <div className="space-y-2">
                    <Label htmlFor="health">{t('fields.health')} (1-5)</Label>
                    <Input
                      id="health"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.health}
                      onChange={(e) => updateField('health', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* Absences */}
                  <div className="space-y-2">
                    <Label htmlFor="absences">{t('fields.absences')}</Label>
                    <Input
                      id="absences"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.absences}
                      onChange={(e) => updateField('absences', parseInt(e.target.value))}
                      required
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Grades Section */}
            <AccordionItem value="grades">
              <AccordionTrigger className="text-lg font-semibold">
                {t('form.sections.grades')}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* G1 */}
                  <div className="space-y-2">
                    <Label htmlFor="G1">{t('fields.G1')} (0-20)</Label>
                    <Input
                      id="G1"
                      type="number"
                      min="0"
                      max="20"
                      value={formData.G1}
                      onChange={(e) => updateField('G1', parseInt(e.target.value))}
                      required
                    />
                  </div>

                  {/* G2 */}
                  <div className="space-y-2">
                    <Label htmlFor="G2">{t('fields.G2')} (0-20)</Label>
                    <Input
                      id="G2"
                      type="number"
                      min="0"
                      max="20"
                      value={formData.G2}
                      onChange={(e) => updateField('G2', parseInt(e.target.value))}
                      required
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Submit Button - Sticky at bottom on mobile */}
      <div className="sticky bottom-4 z-10">
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink hover:opacity-90 transition-opacity"
        >
          {isLoading ? (
            <>
              <Loader2 className="ltr:mr-2 rtl:ml-2 h-5 w-5 animate-spin" />
              {t('form.submitting')}
            </>
          ) : (
            t('form.submit')
          )}
        </Button>
      </div>
    </form>
  )
}
