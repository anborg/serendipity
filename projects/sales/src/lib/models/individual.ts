import { OrganisationRef } from './organisation-ref';
import { Party } from './party';

export class Individual {

  public id?: string;

  constructor(
    public title: string = '',
    public givenName: string = '',
    public middleName: string = '',
    public familyName: string = '',
    public honorific: string = '',
    public salutation: string = '',
    public preferredName: string = '',
    public initials: string = '',
    public dateOfBirth: string = '',
    public placeOfBirth: string = '',
    public sex: string = '',
    public email: string = '',
    public phoneNumber: string = '',
    public photoUrl: string = '',
    public electorate: string = ''
  ) {
    this.party = new Party('Individual');
    this.organisation = new OrganisationRef();
  }

  public party: Party;

  public organisation: OrganisationRef;

}

// https://google.github.io/styleguide/jsoncstyleguide.xml
